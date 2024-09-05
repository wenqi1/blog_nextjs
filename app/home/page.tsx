import styles from "./home.module.css";
import Header from "@/component/header";
import Content from "@/component/content";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
