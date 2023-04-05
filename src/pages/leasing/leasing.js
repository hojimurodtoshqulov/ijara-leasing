import Button from "../../components/button/button";
import CarImg from "../../media/requisities-img.png";
import InfoCard from "../../components/infoCard/infoCard";
import iconSearch from "../../media/icon-search.png";
import iconFile from "../../media/icon-file.png";
import iconPen from "../../media/icon-pen.png";
import icocFileHands from "../../media/icon-handFile.png";

import { useTranslation } from "react-i18next";

import "./style.scss";
import ExplainSection from "../../components/explainSection/explainSection";
import Title from "../../components/title/title";

const Leasing = () => {
  const { t } = useTranslation();
  return (
    <div className="leasing">
      <section className="leasing__hero">
        <div className="leasing__hero-img">
          <img src={CarImg} alt="" />
        </div>
        <div className="container">
          <div className="leasing__hero-wrapper">
            <Title title={t("leasingPage.header.title")} typed underline />
            <h1 className="leasing__hero-title"></h1>
            <p className="leasing__hero-text">{t("leasingPage.header.p1")}</p>
            <div className="leasing__hero-btns">
              <div className="leasing__hero-btn">
                <Button
                  btnLink={"/"}
                  btnTitle={t("leasingPage.header.button1")}
                />
              </div>
              <div className="leasing__hero-btn">
                <Button
                  btnLink={"/"}
                  btnTitle={t("leasingPage.header.button2")}
                  btnStyle={"emptyBtn"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="leasing__cards">
          <InfoCard text={t("leasingPage.cards.card1")} title={"18-48"} />
          <InfoCard text={t("leasingPage.cards.card2")} title={"36%"} />
          <InfoCard text={t("leasingPage.cards.card3")} title={"20%"} />
          <InfoCard text={t("leasingPage.cards.card4")} title={"2%"} />
        </div>
        <ExplainSection />
      </div>
    </div>
  );
};

export default Leasing;
