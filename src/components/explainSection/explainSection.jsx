import styles from "./style.module.scss";
import iconSearch from "../../media/icon-search.png";
import iconFile from "../../media/icon-file.png";
import iconPen from "../../media/icon-pen.png";
import icocFileHands from "../../media/icon-handFile.png";
import Title from "../title/title";

const ExplainSection = () => {
  return (
    <section className={styles.explain}>
      {/* <h2 className={styles.title}>Как получить лизинг</h2> */}
      <Title title={"Как получить лизинг"} typed underline />
      <div className={styles.wrapper}>
        <div className={styles.item}>
          <img src={iconSearch} alt="" />
          <p className={styles.itemText}>Вы выбираете оборудование</p>
        </div>
        <div className={styles.item}>
          <img src={iconFile} alt="" />
          <p className={styles.itemText}>
            Заполняете заявку на лизинговое финансирование и передаете ее на
            рассмотрение
          </p>
        </div>
        <div className={styles.item}>
          <img src={iconPen} alt="" />
          <p className={styles.itemText}>
            Вы подписываете комплект документов по сделке, оформляете залог и
            оплачиваете авансовый платеж
          </p>
        </div>
        <div className={styles.item}>
          <img src={icocFileHands} alt="" />
          <p className={styles.itemText}>
            С этого момента договор лизинга и договор купли-продажи считается
            вступившими в силу!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExplainSection;
