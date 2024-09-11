"use client";

import { apiClient } from "@/app/utils/apiClient";
import { stringUtil } from "@/app/utils/stringUtil";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Content() {
  const [banner, setBanner] = useState("banner1.jpg");
  // 分类导航栏索引
  const [index, setIndex] = useState(0);
  // 所有分类
  const [categories, setCategories] = useState([]);
  // 每个分类的top6文章
  const [articles, setArticles] = useState([
    { id: "", title: "", pushTime: "" },
  ]);
  // 所有标签
  const [tags, setTags] = useState([{ name: "" }]);
  // 每个分类下文章数
  const [articleCount, setArticleCount] = useState([
    { categoryName: "", count: "" },
  ]);
  // 所有文章数
  const [count, setCount] = useState(0);
  const router = useRouter();
  const colors = ["#3366FF", "#67DD30", "#3AC8FC", "#FCE21B", "#FF6519"];

  function handlerClick(index: number) {
    setIndex(index);
  }

  function handlerClickDetails(id: string) {
    router.push(`/details?id=${id}`);
  }

  useEffect(() => {
    setBanner("banner" + Math.floor(Math.random() * 3 + 1) + ".jpg");

    apiClient
      .get("/category/query")
      .then((response) => {
        setCategories(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });

    apiClient
      .get("/tag/queryAll")
      .then((response) => {
        setTags(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });

    apiClient
      .get("/article/queryArticleCountInCategory")
      .then((response) => {
        setArticleCount(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });

    apiClient
      .get("/article/queryArticleCount")
      .then((response) => {
        setCount(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });
  }, []);

  useEffect(() => {
    apiClient
      .get(`/article/queryTop?category=${categories[index]}&n=6`)
      .then((response) => {
        setArticles(response.data.data);
      })
      .catch((error) => {
        console.error("failed fetch data:", error);
      });
  }, [categories, index]);

  return (
    <main className="content_main">
      <div className="content_left">
        <div
          className="content_left_banner"
          style={{ backgroundImage: `url(/images/${banner})` }}
        ></div>

        <div className="content_left_navigation">
          <div className="content_left_navigation_items">
            {categories.map((item, num) => (
              <div
                key={num}
                onClick={() => {
                  handlerClick(num);
                }}
                className={
                  num === index
                    ? "content_left_navigation_item_check"
                    : "content_left_navigation_item"
                }
              >
                {item}
              </div>
            ))}
          </div>
          <div>
            <img
              src="/images/more.png"
              className="content_left_navigation_more"
            />
          </div>
        </div>

        <div className="content_left_items">
          {articles.map((item, index) => (
            <div key={index} className="content_left_item">
              <img
                src="/images/python.png"
                className="content_left_item_cover"
              />
              <p
                className="content_left_item_title"
                onClick={() => {
                  handlerClickDetails(item.id);
                }}
              >
                {item.title}
              </p>
              <p className="content_left_item_date">
                {stringUtil.formatDate(item.pushTime, "YYYY-MM-DD hh:mm:ss")}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="content_right">
        <div className="content_right_person">
          <img src="/images/header.jpg" className="content_right_header" />
          <p className="content_right_name">文奇</p>
          <p className="content_right_description">一个程序开发者</p>
          <div className="content_right_contact">
            <div>
              <img
                src="/images/github.png"
                className="content_right_contact_icon"
              />
            </div>

            <div>
              <img
                src="/images/wechat.png"
                className="content_right_contact_icon"
              />
              <img
                src="/images/wechatCode.jpg"
                className="content_right_contact_code"
              />
            </div>

            <div>
              <img
                src="/images/qq.png"
                className="content_right_contact_icon"
              />
              <img
                src="/images/qqCode.jpg"
                className="content_right_contact_code"
              />
            </div>

            <div>
              <img
                src="/images/bilibili.png"
                className="content_right_contact_icon"
              />
            </div>
          </div>
          <div className="content_right_data">
            <div>
              <p>{count}</p>
              <p>文章</p>
            </div>
            <div>
              <p>{categories.length}</p>
              <p>分类</p>
            </div>
            <div>
              <p>{tags.length}</p>
              <p>标签</p>
            </div>
          </div>
        </div>

        <div className="content_right_classify">
          <div className="content_right_classify_title">
            <img
              src="/images/classify.png"
              className="content_right_classify_icon"
            />
            <span className="content_right_classify_text">分类</span>
          </div>
          {articleCount.map((item, index) => (
            <div key={index} className="content_right_classify_item">
              <span>{item.categoryName}</span>
              <span>{item.count}</span>
            </div>
          ))}
        </div>

        <div className="content_right_tag">
          <div className="content_right_tag_title">
            <img src="/images/tag.png" className="content_right_tag_icon" />
            <span className="content_right_tag_text">标签</span>
          </div>
          <div className="content_right_tag_content">
            {tags.map((tag, index) => (
              <div
                key={index}
                style={{ color: colors[Math.floor(Math.random() * 5 + 1)] }}
                className="content_right_tag_style"
              >
                {tag.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
