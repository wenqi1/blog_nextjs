import Footer from "@/component/footer";
import Header from "@/component/header";
import styles from "./personal.module.css";
import profile from "../../public/resource/profile.json";

export default function personal() {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.personal}>
        <div className={styles.personal_img_div}>
          <img src="/images/profile.gif" className={styles.personal_img} />
        </div>

        <div className={styles.personal_profile}>
          <div
            className={`${styles.personal_profile_title} ${styles.personal_introduce_title_color}`}
          >
            个人简历
          </div>
          <div
            className={`${styles.personal_profile_content} ${styles.personal_introduce_content_color}`}
          >
            {profile.introduce}
          </div>
        </div>

        <div className={styles.personal_profile}>
          <div
            className={`${styles.personal_profile_title} ${styles.personal_interest_title_color}`}
          >
            兴趣领域
          </div>
          <div
            className={`${styles.personal_profile_content} ${styles.personal_interest_content_color}`}
          >
            {profile.interest}
          </div>
        </div>

        <div className={styles.personal_profile}>
          <div
            className={`${styles.personal_profile_title} ${styles.personal_share_title_color}`}
          >
            知识分享
          </div>
          <div
            className={`${styles.personal_profile_content} ${styles.personal_share_content_color}`}
          >
            {profile.share}
          </div>
        </div>

        <div className={styles.personal_profile}>
          <div
            className={`${styles.personal_profile_title} ${styles.personal_vision_title_color}`}
          >
            个人愿景
          </div>
          <div
            className={`${styles.personal_profile_content} ${styles.personal_vision_content_color}`}
          >
            {profile.vision}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
