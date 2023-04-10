import CarImg from "../../media/requisities-img.png";
import Title from "../../components/title/title";
import "./style.scss";
import { useTranslation } from "react-i18next";

const Requisites = () => {
  const { t } = useTranslation();
  return (
    <div className="requisites">
      <div className="side-img">
        <img className="img" src={CarImg} alt="" />
      </div>
      <div className="container">
        <main className="requisites__content">
          <Title title={t("requisites.title")} typed />
          <section className="requisites__section">
            <Title
              small
              border={false}
              title={t("requisites.section1.title")}
            />
            <p data-aos="fade-right" className="requisites__text">
              title={t("requisites.section1.text")}
            </p>
          </section>
          <section className="requisites__section">
            <Title
              small
              border={false}
              title={t("requisites.section2.title")}
            />
            <p data-aos="fade-right" className="requisites__text">
              {t("requisites.section2.text")}.:{" "}
              <a href="tel:+998 (99) 160-90-00">+998 (99) 160-90-00</a>,{" "}
              <a href="tel:+998 (99) 161-90-00">+998 (99) 161-90-00</a>
            </p>
          </section>
          <section className="requisites__section">
            <Title
              small
              border={false}
              title={t("requisites.section3.title")}
            />
            <p data-aos="fade-right" className="requisites__text">
              {t("requisites.section3.text")}
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Requisites;
