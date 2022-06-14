import styles from "./TestimonialsPage.module.css";
import TestimonialCard from "./TestimonialCard";
import testimonialsData from "../../data/testimonials-data";

const TestimonialsPage = () => {
  return (
    <div id="testimonials" className={styles["testimonials-container"]}>
      <h1>{testimonialsData.title}</h1>
      <div className={styles["testimonials-list"]}>
        {testimonialsData.cards.map((item, index) => (
          <TestimonialCard
            content={item.content}
            author={item.author}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsPage;
