"use client";

import Header from "@/component/header";
import styles from "./wonderful.module.css";
import { Image } from "antd";

export default function wonderful() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.wonderful}>
        <div className={styles.wonderful_content}>
          <div className={styles.wonderful_content_item}>
            <Image.PreviewGroup
              items={[
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
              ]}
            >
              <Image
                width="19vw"
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              />
            </Image.PreviewGroup>
            <div className={styles.wonderful_content_item_title}>旅游照片</div>
            <div className={styles.wonderful_content_item_date}>
              2024-09-24 15-18-18
            </div>
          </div>
          <div className={styles.wonderful_content_item}>
            <Image.PreviewGroup
              items={[
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
              ]}
            >
              <Image
                width="19vw"
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              />
            </Image.PreviewGroup>
            <div className={styles.wonderful_content_item_title}>旅游照片</div>
            <div className={styles.wonderful_content_item_date}>
              2024-09-24 15-18-18
            </div>
          </div>
          <div className={styles.wonderful_content_item}>
            <Image.PreviewGroup
              items={[
                "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
                "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
              ]}
            >
              <Image
                width="19vw"
                src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
              />
            </Image.PreviewGroup>
            <div className={styles.wonderful_content_item_title}>旅游照片</div>
            <div className={styles.wonderful_content_item_date}>
              2024-09-24 15-18-18
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
