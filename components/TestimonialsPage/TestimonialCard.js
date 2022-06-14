import styles from "./TestimonialCard.module.css";
import { useEffect } from "react";
import Aos from "aos";

const TestimonialCard = (props) => {
  useEffect(() => {
    Aos.init(2000);
  }, []);
  return (
    <div className={styles["testimonial-card"]} data-aos="zoom-out">
      <div className={styles["testimonial-content"]}>
        <div>
          <img src="/begin-quote.svg" alt="Begin-Quote" />
        </div>
        <span>{props.content}</span>
        <div className={styles["end-quote"]}>
          <img src="/end-quote.svg" alt="End-Quote" />
        </div>
      </div>
      <div className={styles["testimonial-author"]}>
        <div>
          <img src="/by-quote.svg" alt="By" />
        </div>
        <div className={styles["author-text"]}>{props.author}</div>
      </div>
    </div>
  );
};

export default TestimonialCard;
