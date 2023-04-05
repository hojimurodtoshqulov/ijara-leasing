import InfoCard from "../../components/infoCard/infoCard";
import Title from "../../components/title/title";
import "./contact.scss";
import LocationIcon from "../../media/location-icon.png";
import TelIcon from "../../media/tel-icon.png";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <main className="contact">
      <div className="container">
        <Title typed title={t("contactPage.contact.title")} />

        <div className="contact-cards">
          <div className="contact-cards__item">
            <div className="contact-cards__item-title">
              <Title
                small
                underline={false}
                title={t("contactPage.contact.address")}
              />
            </div>

            <InfoCard
              text={t("contactPage.contact.location")}
              title={<img src={LocationIcon} alt="icon" />}
            />
          </div>
          <div className="divider" />
          <div className="contact-cards__item">
            <div className="contact-cards__item-title">
              <Title
                small
                underline={false}
                title={t("contactPage.contact.phone")}
              />
            </div>
            <InfoCard
              text={
                <div className="contact__tel-numbers">
                  <span>
                    {t("contactPage.contact.tel")}.:
                    <a href="tel:+998 (99) 160-90-00">+998 (99) 160-90-00</a>
                  </span>
                  <a href="tel:+998 (99) 161-90-00">+998 (99) 161-90-00</a>
                </div>
              }
              title={<img src={TelIcon} alt="icon" />}
            />
          </div>
        </div>
        <Title title={t("contactPage.map.title")} typed />
        <div data-aos="zoom-in-down" className="contact__map">
          <iframe
            title="iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1271.2092005609525!2d69.2704868180565!3d41.29892324595613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e3!4m0!4m0!5e0!3m2!1sru!2s!4v1679145475185!5m2!1sru!2s"
            width="100%"
            height="450px"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Contact;
