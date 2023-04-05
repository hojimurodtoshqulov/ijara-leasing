import "./programs.scss";

import React from "react";
import Title from "../../components/title/title";
import ExplainSection from "../../components/explainSection/explainSection";
import { useTranslation } from "react-i18next";

/* 




*/

const Programs = () => {
  const { t } = useTranslation();
  return (
    <div className="programs">
      <div className="container">
        <section className="programs__mainInfo">
          <Title title={t("programs.title")} typed />
          <p className="programs__text">
            {t("programs.p1")}
            {/*
            <span className="programs__text-highlight">IJARA LEASING</span>{" "}
           . */}
          </p>
          <p className="programs__text">{t("programs.p2")}</p>
         <p className="programs__text">{t("programs.p3")}</p>
          <p className="programs__text">{t("programs.p4")}</p>
        </section>
        <ExplainSection />
      </div>
    </div>
  );
};

export default Programs;
