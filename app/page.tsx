"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handlerClick() {
    router.push("/home?index=0");
  }

  return (
    <main className={styles.main}>
      <div className={styles.title1_div}>你好，我是</div>
      <div className={styles.title2_div}>文奇</div>
      <div className={styles.title3_div}>
        一个程序开发者，热爱生活，乐于分享
      </div>
      <div className={styles.title4_div}>
        喜欢Java、JavaScript、Python、HarmonyOS等技术
      </div>
      <div className={styles.entry_div} onClick={handlerClick}>
        欢迎进入我的博客
      </div>
    </main>
  );
}
