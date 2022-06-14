import { useEffect } from "react";
import Navbar from "../Layout/Navbar/Navbar";
import styles from "./HomePage.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className={styles["home-page"]} data-aos="fade-down">
      <Navbar />
      <div className={styles["home-container"]}>
        <h1>SIDDHARTH&apos;S LANDING PAGE</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={styles["home-form"]}>
          <input type="text" placeholder="Enter your domain" />
          <button>Try For Free</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
