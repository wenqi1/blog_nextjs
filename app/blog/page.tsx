"use client";

import { apiClient } from "@/app/utils/apiClient";
import Header from "@/component/header";
import styles from "./page.module.css";
import { useState, useEffect } from "react";
import { stringUtil } from "../utils/stringUtil";
import { useRouter } from "next/navigation";

export default function blog() {
  // 所有分类
  const [categories, setCategories] = useState([""]);
  // 分类导航栏索引
  const [index, setIndex] = useState(0);
  // 文章列表
  const [articles, setArticles] = useState([
    {
      id: "",
      title: "",
      pushTime: "",
      readCount: "",
      likeCount: "",
      summary: "",
    },
  ]);

  const router = useRouter();

  function handleClick(name: string, index: number) {
    setIndex(index);

    let url = "/article/queryTop";
    if (name !== "All") {
      url = url + `?category=${name}`;
    }
    apiClient
      .get(url)
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });
  }

  function handlerClickDetails(id: string) {
    router.push(`/details?id=${id}`);
  }

  useEffect(() => {
    apiClient
      .get("/category/query")
      .then((response) => {
        setCategories(["All", ...response.data.data]);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });

    apiClient
      .get("/article/queryTop")
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });
  }, []);

  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.blog}>
        <div className={styles.blog_navigation}>
          {categories.map((item, num) => (
            <div
              key={num}
              className={
                index === num
                  ? styles.blog_navigation_item_check
                  : styles.blog_navigation_item
              }
              onClick={() => {
                handleClick(item, num);
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={styles.blog_list}>
          {articles.map((item, index) => (
            <div
              key={index}
              className={styles.blog_item}
              onClick={() => {
                handlerClickDetails(item.id);
              }}
            >
              <div className={styles.blog_title}>{item.title}</div>
              <div className={styles.blog_summary}>{item.summary}</div>
              <div>
                <span className={styles.blog_statement}>
                  发布于{" "}
                  {stringUtil.formatDate(item.pushTime, "YYYY-MM-DD hh:mm:ss")}
                </span>
                <span className={styles.blog_statement}>
                  阅读量 {item.readCount}
                </span>
                <span className={styles.blog_statement}>
                  点赞量 {item.likeCount}
                </span>
              </div>
              <div className={styles.blog_item_line}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
