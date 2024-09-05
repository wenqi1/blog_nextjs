"use client";

import { useState } from "react";

export default function Content() {
  const [banner, setBanner] = useState("banner1.jpg");

  const [index, setIndex] = useState(0);

  function handlerClick(index: number) {
    setIndex(index);
  }

  const classify = [
    {
      name: "Java",
    },
    {
      name: "python",
    },
    {
      name: "JavaScript",
    },
    {
      name: "HarmonyOS",
    },
  ];

  const tags = [
    {
      name: "组件库",
      color: "#3366FF",
    },
    {
      name: "web",
      color: "#67DD30",
    },
    {
      name: "MySql",
      color: "#3AC8FC",
    },
    {
      name: "Redis",
      color: "#FCE21B",
    },
    {
      name: "Spring",
      color: "#FF6519",
    },
    {
      name: "MySql",
      color: "#3AC8FC",
    },
    {
      name: "Redis",
      color: "#FCE21B",
    },
    {
      name: "Spring",
      color: "#FF6519",
    },
    {
      name: "MySql",
      color: "#3AC8FC",
    },
    {
      name: "Redis",
      color: "#FCE21B",
    },
    {
      name: "Spring",
      color: "#FF6519",
    },
  ];

  const items = [
    {
      title: "Java数据类型介绍",
      date: "2024/4/10",
      cover: "/images/item1.jpg",
    },
    {
      title: "Java多线程的使用",
      date: "2024/4/10",
      cover: "/images/item2.jpg",
    },
    {
      title: "Java集合的介绍",
      date: "2024/4/10",
      cover: "/images/item3.jpg",
    },
    {
      title: "Java垃圾回收器",
      date: "2024/4/10",
      cover: "/images/item4.jpg",
    },
    {
      title: "Java如何保证线程安全",
      date: "2024/4/10",
      cover: "/images/item5.jpg",
    },
    {
      title: "Java虚拟机性能调优",
      date: "2024/4/10",
      cover: "/images/item6.jpg",
    },
  ];

  setInterval(() => {
    setBanner("banner" + Math.floor(Math.random() * 3 + 1) + ".jpg");
  }, 200000);

  return (
    <main className="content_main">
      <div className="content_left">
        <div
          className="content_left_banner"
          style={{ backgroundImage: `url(/images/${banner})` }}
        ></div>

        <div className="content_left_navigation">
          {classify.map((item, num) => (
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
              {item.name}
            </div>
          ))}
        </div>

        <div className="content_left_items">
          {items.map((item, index) => (
            <div key={index} className="content_left_item">
              <img src={item.cover} className="content_left_item_cover" />
              <p>{item.title}</p>
              <p className="content_left_item_date">{item.date}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="content_right">
        <div className="content_right_person">
          <img src="/images/header.jpg" className="content_right_header" />
          <p className="content_right_name">文奇Leo</p>
          <p className="content_right_description">一个独立开发者</p>
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
              <p>10000</p>
              <p>文章</p>
            </div>
            <div>
              <p>10000</p>
              <p>分类</p>
            </div>
            <div>
              <p>10000</p>
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
          <div className="content_right_classify_item">
            <span>Java</span>
            <span>10</span>
          </div>
          <div className="content_right_classify_item">
            <span>Python</span>
            <span>10</span>
          </div>
          <div className="content_right_classify_item">
            <span>JavaScript</span>
            <span>10</span>
          </div>
          <div className="content_right_classify_item">
            <span>HarmonyOS</span>
            <span>10</span>
          </div>
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
                style={{ color: tag.color }}
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
