"use client";

import styles from "./details.module.css";
import Footer from "@/component/footer";
import Header from "@/component/header";
import { marked } from "marked";
import { useEffect, useState } from "react";
import "github-markdown-css";
import { apiClient } from "../utils/apiClient";
import { stringUtil } from "../utils/stringUtil";
import { useSearchParams } from "next/navigation";

export default function Details() {
  const [htmlContent, setHtmlContent] = useState("");
  const [details, setDetails] = useState({
    title: "",
    pushTime: "",
    readCount: 0,
    likeCount: 0,
    contentHtml: "",
  });
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(searchParams.get("id"));
    apiClient
      .get(`/article/query/${searchParams.get("id")}`)
      .then((response) => {
        response.data.data.contentHtml = marked
          .parse(response.data.data.contentMd)
          .toString();
        response.data.data.pushTime = stringUtil.formatDate(
          response.data.data.pushTime,
          "YYYY-MM-DD hh:mm:ss",
        );
        setDetails({ ...response.data.data });
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.details}>
        <div className={styles.details_title}>{details.title}</div>
        <div className={styles.details_statement}>
          <img
            src="/images/shijian.png"
            className={styles.details_statement_img}
          />
          <span className={styles.details_statement_text}>
            {details.pushTime} 发布
          </span>
          <img
            src="/images/yueduliang.png"
            className={styles.details_statement_img}
          />
          <span className={styles.details_statement_text}>
            阅读量 {details.readCount === null ? 0 : details.readCount}
          </span>
          <img
            src="/images/dianzan.png"
            className={styles.details_statement_img}
          />
          <span className={styles.details_statement_text}>
            点赞量 {details.likeCount === null ? 0 : details.likeCount}
          </span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: details.contentHtml }}
          className={`${styles.details_content} markdown-body`}
        ></div>
      </div>
      <Footer />
    </div>
  );
}
