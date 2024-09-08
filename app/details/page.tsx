import styles from "./details.module.css";
import Footer from "@/component/footer";
import Header from "@/component/header";
import { marked } from "marked";

const tt = marked.parse("# hello");
export default function Details() {
  return (
    <div className={styles.main}>
      <Header />
      <div
        dangerouslySetInnerHTML={{ __html: tt }}
        className={styles.details}
      ></div>
      <Footer />
    </div>
  );
}
