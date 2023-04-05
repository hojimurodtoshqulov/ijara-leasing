import styles from "./style.module.scss";
import iconSearch from "../../media/icon-search.png";
import iconFile from "../../media/icon-file.png";
import iconPen from "../../media/icon-pen.png";
import icocFileHands from "../../media/icon-handFile.png";
import Title from "../title/title";
import { useTranslation } from "react-i18next";

const ExplainSection = () => {
  const { t } = useTranslation();
  return (
    <section className={styles.explain}>
      {}
      {/* <h2 className={styles.title}>Как получить лизинг</h2> */}
      <Title title={t("explainSection.title")} typed underline />
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={iconSearch} alt="" />
          <p className={styles.itemText}>{t("explainSection.card1")}</p>
        </div>
        <div className={styles.item}>
          <img src={iconFile} alt="" />
          <p className={styles.itemText}>{t("explainSection.card2")}</p>
        </div>
        <div className={styles.item}>
          <img src={iconPen} alt="" />
          <p className={styles.itemText}>{t("explainSection.card3")}</p>
        </div>
        <div className={styles.item}>
          <img src={icocFileHands} alt="" />
          <p className={styles.itemText}>{t("explainSection.card4")}</p>
        </div>
      </div>
    </section>
  );
};

export default ExplainSection;
