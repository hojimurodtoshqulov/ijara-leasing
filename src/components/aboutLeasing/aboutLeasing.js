import scss from "./aboutLeasing.module.scss";
import img1 from "../../media/image106.png";
import img2 from "../../media/library.png";
import img3 from "../../media/thought.png";
import img4 from "../../media/sincerely.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutLeasing = () => {
  const transition = { type: "spring", duration: 2 };

  const { t } = useTranslation();

  return (
    <div className={scss.aboutLeasingDiv}>
      <div className="container">
        <div className={scss.aboutLeasing}>
          <div className={scss.aboutLeasing__col1}>
            <div className={scss.aboutLeasing__col1_titles}>
              <motion.div
                initial={{ height: "0px" }}
                whileInView={{ height: "80px" }}
                transition={{ transition, duration: 1 }}
              ></motion.div>
              <h1 data-aos="flip-up">
                <p>{t("home.aboutLeasing.title")}</p>
                <motion.span
                  initial={{ left: "16rem" }}
                  whileInView={{ left: "0" }}
                  transition={{ transition, duration: 1 }}
                ></motion.span>
              </h1>
            </div>
            <div className={scss.aboutLeasing__col1_texts}>
              <p data-aos="flip-up" data-aos-delay="0">
                <span>{t("home.aboutLeasing.p1.title")} - </span>{" "}
                {t("home.aboutLeasing.p1.text")}
              </p>
              <p data-aos="flip-up" data-aos-delay="100">
                <span>{t("home.aboutLeasing.p2.title")}</span>{" "}
                {t("home.aboutLeasing.p2.text")}
              </p>
              <p data-aos="flip-up" data-aos-delay="200">
                <span>{t("home.aboutLeasing.p3.title")}</span>{" "}
                {t("home.aboutLeasing.p3.text")}
              </p>
              <p data-aos="flip-up" data-aos-delay="300">
                <span>{t("home.aboutLeasing.p4.title")}</span>{" "}
                {t("home.aboutLeasing.p4.text")}
              </p>
              <p data-aos="flip-up" data-aos-delay="400">
                <span>{t("home.aboutLeasing.p5.title")}</span>{" "}
                {t("home.aboutLeasing.p5.text")}
              </p>
              <p data-aos="flip-up" data-aos-delay="500">
                <span>{t("home.aboutLeasing.p6.title")}</span>{" "}
                {t("home.aboutLeasing.p6.text")}
              </p>
            </div>
          </div>
          <div className={scss.aboutLeasing__col2}>
            <motion.img
              initial={{
                opacity: "0",
                // right: "-20rem",
                transform: "rotate(5deg)",
                transformOrigin: " right top",
              }}
              whileInView={{
                opacity: "1",
                // right: "-11rem",
                transform: "rotate(0deg)",
                transformOrigin: " right top",
              }}
              transition={{ transition, duration: 0.8 }}
              className={scss.aboutLeasing__col2_img1}
              src={img1}
              alt=""
            />
            <motion.img
              initial={{
                opacity: "0",
                // right: "-20rem",
                transform: "rotate(-5deg)",
                transformOrigin: " right top",
              }}
              whileInView={{
                opacity: "1",
                // right: "-9rem",
                transform: "rotate(5deg)",
                transformOrigin: " right top",
              }}
              transition={{ transition, duration: 0.8 }}
              className={scss.aboutLeasing__col2_img2}
              src={img2}
              alt=""
            />
            <motion.img
              initial={{
                opacity: "0",
                // right: "-20rem",
                transform: "rotate(5deg)",
                transformOrigin: " right bottom",
              }}
              whileInView={{
                opacity: "1",
                // right: "-1.5rem",
                transform: "rotate(-5deg)",
                transformOrigin: " right bottom",
              }}
              transition={{ transition, duration: 0.8 }}
              className={scss.aboutLeasing__col2_img3}
              src={img3}
              alt=""
            />
            <motion.img
              initial={{
                opacity: "0",
                // right: "-20rem",
                transform: "rotate(5deg)",
                transformOrigin: " right bottom",
              }}
              whileInView={{
                opacity: "1",
                // right: "-1.5rem",
                transform: "rotate(-5deg)",
                transformOrigin: " right bottom",
              }}
              transition={{ transition, duration: 0.8 }}
              className={scss.aboutLeasing__col2_img4}
              src={img4}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLeasing;
