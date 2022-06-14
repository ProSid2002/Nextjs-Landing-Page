import styles from "./FooterPage.module.css";

const FooterPage = () => {
  return (
    <div id="tryforfree" className={styles["footer-container"]}>
      <h1>Discover the latest trends</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.Lorem ipsum
        dolor sit.
      </p>
      <div className={styles["footer-link"]}>View Latest Updates</div>
      <div className={styles["form"]}>
        <input type="text" placeholder="Your email address" />
        <button>Try For Free</button>
      </div>
      <div className={styles["footer-list"]}>
        <ul>
          <li>Contact</li>
          <li>Terms</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterPage;
