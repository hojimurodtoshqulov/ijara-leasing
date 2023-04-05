import React from "react";
import "./company.scss";
import InfoCard from "../../components/infoCard/infoCard";
import Title from "../../components/title/title";

/* 

«Ijara Leasing» 

«Ijara Leasing» 

*/

const Company = () => {
  return (
    <main className="company">
      <div className="container">
        <section className="company__section">
          <Title title={"О компании"} typed />
          <p data-aos="flip-down" className="company__par">
            <span className="par__title">«Ijara Leasing»</span> - независимая
            универсальная компания. Мы предоставляем все виды лизинговых услуг,
            исходя из индивидуальных особенностей каждого клиента.
          </p>
          <p data-aos="flip-up" className="company__par">
            <span className="par__title">«Ijara Leasing»</span> - 1 год успешно
            работает на рынке лизинга и активно развивается. Головной офис
            компании находится в Ташкенте. «Ijara Leasing» помогает своим
            клиентам и партнерам в сегментах микро- и малого бизнеса быстро и
            успешно развиваться. Также компания помогает бизнесу среднего,
            крупного и корпоративного уровня.
          </p>
          <p data-aos="flip-down" className="company__par">
            <span className="par__title">«Ijara Leasing»</span> - заинтересовано
            в построении долгосрочных, взаимовыгодных отношений со своими
            клиентами, обеспечивая индивидуальный подход и высокий уровень
            обслуживания.
          </p>
        </section>
        <section className="company__section">
          <Title title={"Наша миссия"} typed />
          <p data-aos="zoom-out" className="company__par">
            <span className="par__title">«Ijara Leasing»</span> - одна из первых
            и крупных иностранных лизинговых компаний в Узбекистане. Мы активно
            финансируем компании во всех ключевых секторах экономики страны от
            животноводческого сектора и добывающей промышленности до
            высокотехнологичных областей, таких как фармацевтика или ИТ.
            Приоритетными направлениями нашей деятельности являются лизинг
            различных видов коммерческих транспортных средств, аграрной и
            специальной строительной техники, а также различного
            производственного и другого оборудования.
          </p>
        </section>
        <div className="card-wrapper">
          <InfoCard
            title={"Топ-20"}
            text={"В числе лизинговых компаний Узбекистана"}
          />
          <InfoCard title={"5 млн"} text={"долларов США Капитал"} />
          <InfoCard title={"21 млн"} text={"долларов США Стоимость проектов"} />
        </div>
      </div>
    </main>
  );
};

export default Company;
