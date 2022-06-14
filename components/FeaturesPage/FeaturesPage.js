import styles from "./FeaturesPage.module.css";
import FeatureCard from "./FeatureCard";
import featuresData from "../../data/features-data";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FeaturesPage = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="features" className={styles["features-container"]}>
      <h1>{featuresData.title}</h1>

      <div className={styles["features-list"]}>
        {featuresData.cards.map((item, index) => (
          <FeatureCard
            title={item.title}
            content={item.content}
            img={item.img}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesPage;
