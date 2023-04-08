import scss from "./footer.module.scss";
import logo from "../../media/logo_head.png";
import img1 from "../../media/Frame163.png";
import img2 from "../../media/Frame164.png";
import img3 from "../../media/Frame165.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className={scss.footer}>
      <div className="container">
        <div className={scss.footer__row1}>
          <div className={scss.footer__row1_col1}>
            <Link to="/" className={scss.footer__row1_col1_logo}>
              <img src={logo} alt="" />
              <h2>ijara leasing</h2>
            </Link>
            <div className={scss.footer__row1_col1_imgDiv}>
              <Link to="/" className={scss.footer__row1_col1_imgDiv_img}>
                {/* <img src={img1} alt="" /> */}
                <FaFacebookF />
              </Link>
              <Link to="/" className={scss.footer__row1_col1_imgDiv_img}>
                {/* <img src={img2} alt="" /> */}
                <FaTwitter />
              </Link>
              <Link to="/" className={scss.footer__row1_col1_imgDiv_img}>
                {/* <img src={img3} alt="" /> */}
                <RiInstagramFill />
              </Link>
            </div>
          </div>
          <div className={scss.footer__row1_line}></div>
          <div className={scss.footer__row1_col2}>
            <Link to="/" className={scss.footer__row1_col2_link}>
              <span>{t("nav.company")}</span> <p></p>
            </Link>
            <Link to="/" className={scss.footer__row1_col2_link}>
              {t("nav.requisites")} <p></p>
            </Link>
            <Link to="/" className={scss.footer__row1_col2_link}>
              {t("nav.contact")} <p></p>
            </Link>
            <Link to="/" className={scss.footer__row1_col2_link}>
              <span>{t("nav.programs")}</span> <p></p>
            </Link>
            <Link to="/" className={scss.footer__row1_col2_link}>
              {t("nav.leasing")} <p></p>
            </Link>
          </div>
          <div className={scss.footer__row1_line}></div>
          <div className={scss.footer__row1_col3}>
            <h1>{t("home.footer.address")}:</h1>
            <p>{t("home.footer.location")}, Ц-5, д.78, кв.13</p>
            <h1>{t("home.footer.phone")}:</h1>
            <p>
              <a href="tel:+998991609000">+998 (99) 160-90-00</a>
              <a href="tel:+998991619000">+998 (99) 161-90-00</a>
            </p>
          </div>
        </div>
      </div>
      <div className={scss.footer__row2}>
        <p>
          OOO <Link to="/">“IJARA LEASING”</Link> 2021-2021
        </p>
      </div>
    </footer>
  );
};

export default Footer;
