import scss from "./helpTitle.module.scss";
import Button from "../button/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const HelpTitle = () => {
  const { t } = useTranslation();
  const transition = { type: "spring", duration: 2 };

  return (
    <div className={scss.helpTitleDiv}>
      <div className="container">
        <div className={scss.helpTitle} data-aos="fade-left">
          <h1>
            <p data-aos="flip-up" data-aos-delay="0">
              {t("home.helpTitle.title1")} <br /> {t("home.helpTitle.title2")}
            </p>
            <motion.span
              initial={{ width: "100px", left: "17rem" }}
              whileInView={{ width: "100px", left: "0" }}
              transition={{ transition, duration: 1 }}
            ></motion.span>
          </h1>
          <div className={scss.helpTitle__elements}>
            <div className={scss.helpTitle__elements_row1}>
              <motion.div
                initial={{ height: "0px" }}
                whileInView={{ height: "112px" }}
                transition={{ transition }}
              ></motion.div>
              <p data-aos="flip-up" data-aos-delay="100">
                {t("home.helpTitle.text")}
              </p>
            </div>
            <div
              className={scss.helpTitle__elements_btn}
              data-aos="flip-up"
              data-aos-delay="200"
            >
              <Button btnTitle={t("home.helpTitle.btnText")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpTitle;
