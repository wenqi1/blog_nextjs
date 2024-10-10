"use client";

import styles from "./details.module.css";
import Footer from "@/component/footer";
import Header from "@/component/header";
import { marked } from "marked";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import "github-markdown-css";
import { apiClient } from "../utils/apiClient";
import { stringUtil } from "../utils/stringUtil";
import { useSearchParams } from "next/navigation";
import { Divider, message } from "antd";

export default function Details() {
  const [details, setDetails] = useState({
    title: "",
    pushTime: "",
    readCount: 0,
    likeCount: 0,
    contentHtml: "",
  });
  const [comment, setComment] = useState("");
  const [inputCount, setInputCount] = useState(200);
  const searchParams = useSearchParams();
  const renderRef = useRef(true);
  const [messageApi, contextHolder] = message.useMessage();
  const [commentList, setCommentList] = useState([
    {
      commentUserName: "",
      content: "",
      createTime: "",
    },
  ]);

  useEffect(() => {
    if (renderRef.current) {
      renderRef.current = false;
      return;
    }
    const formData = new FormData();
    formData.append("id", searchParams.get("id")!);

    apiClient
      .post("/article/read", formData)
      .then((response) => {})
      .catch((error) => {
        console.error("failed save data:", error);
      });

    apiClient
      .get(`/comment/query/${searchParams.get("id")}`)
      .then((response) => {
        setCommentList([...response.data.data]);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });

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

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const content = event.target.value;
    if (content.length <= 200) {
      setComment(content);
      setInputCount(200 - content.length);
    }
  }

  function handleClickLike() {
    const formData = new FormData();
    formData.append("id", searchParams.get("id")!);

    apiClient
      .post("/article/like", formData)
      .then((response) => {
        setDetails({ ...details, likeCount: details.likeCount + 1 });

        // 提示框
        messageApi.open({
          type: "success",
          content: "点赞成功",
          duration: 3,
        });
      })
      .catch((error) => {
        console.error("failed save data:", error);
      });
  }

  function handleClickComment() {
    const body = {
      articleId: searchParams.get("id"),
      content: comment,
      parentId: "0",
    };
    apiClient
      .post("/comment/send", body)
      .then((response) => {
        if (response.data.code === "0000") {
          // 提示框
          messageApi.open({
            type: "success",
            content: "发送成功",
            duration: 3,
          });

          apiClient
            .get(`/comment/query/${searchParams.get("id")}`)
            .then((response) => {
              setCommentList([...response.data.data]);
            })
            .catch((error) => {
              console.error("failed fetch data:", error);
            });
        }
      })
      .catch((error) => {
        console.error("failed save data:", error);
      });
  }

  return (
    <div className={styles.main}>
      {contextHolder}
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
        <div className={styles.details_like} onClick={handleClickLike}>
          点赞支持
        </div>
        <div className={styles.details_like_statement}>
          你的点赞是对博主最大的支持
        </div>
        <div className={styles.details_comment}>
          <textarea
            value={comment}
            className={styles.details_comment_input}
            placeholder="请留下你的真实感受"
            onChange={(e) => {
              handleChange(e);
            }}
          ></textarea>
          <div className={styles.details_comment_statement}>
            <span className={styles.details_comment_tip}>
              还可以输入{inputCount}个字符
            </span>
            <div
              className={styles.details_comment_send}
              onClick={handleClickComment}
            >
              发送评论
            </div>
          </div>
        </div>

        <div className={styles.details_comment_list}>
          {commentList.map((item, index) => (
            <div key={index} className={styles.details_comment_item}>
              <div className={styles.details_comment_item_statement}>
                <div>{item.commentUserName}</div>
                <div>
                  {stringUtil.formatDate(
                    item.createTime,
                    "YYYY-MM-DD hh:mm:ss",
                  )}
                </div>
              </div>
              <div>{item.content}</div>
              <Divider />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
