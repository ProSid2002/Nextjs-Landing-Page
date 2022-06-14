import styles from "./FeatureCard.module.css";

const FeatureCard = (props) => {
  return (
    <div className={styles["feature-card"]} data-aos="zoom-in">
      <hr className={styles.div} />
      <h2>{props.title}</h2>
      <div>
        <img src={props.img} alt="" className={styles["feature-logo"]} />
      </div>
      <p>{props.content}</p>
    </div>
  );
};

export default FeatureCard;
