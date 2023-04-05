import Button from "../../components/button/button";
import CarImg from "../../media/requisities-img.png";
import InfoCard from "../../components/infoCard/infoCard";
import iconSearch from "../../media/icon-search.png";
import iconFile from "../../media/icon-file.png";
import iconPen from "../../media/icon-pen.png";
import icocFileHands from "../../media/icon-handFile.png";

import "./style.scss";
import ExplainSection from "../../components/explainSection/explainSection";
import Title from "../../components/title/title";

const Leasing = () => {
  return (
    <div className="leasing">
      <section className="leasing__hero">
        <div className="leasing__hero-img">
          <img src={CarImg} alt="" />
        </div>
        <div className="container">
          <div className="leasing__hero-wrapper">
            <Title title={"Экспресс лизинг"} typed underline />
            <h1 className="leasing__hero-title"></h1>
            <p className="leasing__hero-text">
              С целью сделать продукты лизинга доступным широкому кругу
              предпринимателей ООО «Ijara Leasing», ВПЕРВЫЕ в Узбекистане,
              запустила новый продукт – Экспресс лизинг строительной
              специализированной техники.
            </p>
            <div className="leasing__hero-btns">
              <div className="leasing__hero-btn">
                <Button btnLink={"/"} btnTitle={"Лизинговые программы"} />
              </div>
              <div className="leasing__hero-btn">
                <Button
                  btnLink={"/"}
                  btnTitle={"Экспресс лизинг"}
                  btnStyle={"emptyBtn"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="leasing__cards">
          <InfoCard text={"месяцев срок лизинга"} title={"18-48"} />
          <InfoCard text={"минимальный авансовый платеж"} title={"36%"} />
          <InfoCard text={"ставка удорожания"} title={"20%"} />
          <InfoCard text={"комиссия за рассмотрение"} title={"2%"} />
        </div>
        <ExplainSection />
      </div>
    </div>
  );
};

export default Leasing;
