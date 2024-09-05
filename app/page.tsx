"use client";

import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  function handlerClick() {
    router.push("/home");
  }

  return (
    <main className={styles.main}>
      <div className={styles.title1_div}>你好，我是</div>
      <div className={styles.title2_div}>文奇Leo</div>
      <div className={styles.title3_div}>
        一个独立开发者，热爱生活，喜欢分享
      </div>
      <div className={styles.title4_div}>
        喜欢Java、JavaScript、Python、HarmonyOS等技术
      </div>
      <div className={styles.entry_div} onClick={handlerClick}>
        welcome to my blog
      </div>
    </main>
  );
}
