import styles from "./infoCard.module.scss";

const InfoCard = ({ title, text }) => {
  return (
    <div data-aos="flip-up" data-aos-delay="100" className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardText}>{text}</p>
    </div>
  );
};

export default InfoCard;
