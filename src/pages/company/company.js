import React from "react";
import "./company.scss";
import InfoCard from "../../components/infoCard/infoCard";
import Title from "../../components/title/title";

import { useTranslation } from "react-i18next";

/* 

«Ijara Leasing» 

«Ijara Leasing» 

*/

const Company = () => {
  const { t, i18n } = useTranslation();
  return (
    <main className="company">
      <div className="container">
        <section className="company__section">
          <Title title={t("companyPage.about.title")} typed />
          <p data-aos="flip-down" className="company__par">
            <span className="par__title">«Ijara Leasing»</span>{" "}
            {t("companyPage.about.p1")}
          </p>
          <p data-aos="flip-up" className="company__par">
            <span className="par__title">«Ijara Leasing»</span>
            {t("companyPage.about.p2")}
          </p>
          <p data-aos="flip-down" className="company__par">
            <span className="par__title">«Ijara Leasing»</span>
            {t("companyPage.about.p3")}
          </p>
        </section>
        <section className="company__section">
          <Title title={t("companyPage.mission.title")} typed />
          <p data-aos="zoom-out" className="company__par">
            <span className="par__title">«Ijara Leasing»</span>
            {t("companyPage.mission.p1")}
          </p>
        </section>
        {/* <div className="card-wrapper">
          <InfoCard
            title={t("companyPage.card1.title")}
            text={t("companyPage.card1.text")}
          />
          <InfoCard
            title={t("companyPage.card2.title")}
            text={t("companyPage.card2.text")}
          />
          <InfoCard
            title={t("companyPage.card3.title")}
            text={t("companyPage.card3.text")}
          />
        </div> */}
      </div>
    </main>
  );
};

export default Company;
