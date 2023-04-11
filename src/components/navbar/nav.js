import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo_head.png";
import scss from "./nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "../button/button";
const Nav = ({ onClick }) => {
  const [navSize, setnavSize] = useState("12vh");
  const [navColorBg, setnavColorBg] = useState("transparent");
  const [navLogoFSZ, setNavLogoFSZ] = useState("20px");
  const [navContainerBR, setNavContainerBR] = useState("2px solid #fff");
  const listenScrollEvent = () => {
    window.scrollY > 80
      ? setnavColorBg("#0e0e12f0")
      : setnavColorBg("transparent");
    window.scrollY > 80 ? setnavSize("10vh") : setnavSize("13vh");
    window.scrollY > 80 ? setNavLogoFSZ("15px") : setNavLogoFSZ("20px");
    window.scrollY > 80
      ? setNavContainerBR("2px solid #ff00")
      : setNavContainerBR("2px solid #fff");
  };
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
  const [langCheck, setLangCheck] = useState(1);
  const [langColor, setLangColor] = useState("");
  const langBtn = [
    { btntitle: "Ru", id: 1 },
    { btntitle: "Uz", id: 2 },
  ];

  const currentLang = i18n.language === "en-US" ? "ru" : i18n.language;

  const checkLangImg = (e) => {
    if (e.target.value === "ru") {
      i18n.changeLanguage("ru");
      setLangCheck(2);
    } else {
      setLangCheck(1);
      i18n.changeLanguage("uz");
    }
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Suspense fallback="loading">
      <nav
        className={scss.nav}
        style={{
          backgroundColor: navColorBg,
          height: navSize,
          transition: "all 0.8s",
        }}
      >
        <div className="container">
          <div className={scss.nav__container} style={{ height: navSize }}>
            <Link
              onClick={scrollToTop}
              className={scss.nav__container_logo}
              to="/"
            >
              <img src={navLogo} alt="nav logo" />
              <h3 style={{ fontSize: navLogoFSZ }}>IJARA LEASING</h3>
            </Link>
            <div className={scss.nav__container_links}>
              {/* compny */}
              <NavLink
                to="/company"
                className={scss.dropdown}
                onClick={scrollToTop}
              >
                <NavLink
                  to="/company"
                  className={scss.dropdownTitle}
                  onClick={scrollToTop}
                >
                  {t("nav.company")} <AiFillCaretDown /> <span></span>
                </NavLink>
                <div className={scss.dropdownItems}>
                  <Link to="/requisites" onClick={scrollToTop}>
                    {t("nav.requisites")}
                  </Link>
                  <Link to="/contact" onClick={scrollToTop}>
                    {t("nav.contact")}
                  </Link>
                </div>
              </NavLink>
              {/* leasing */}

              <NavLink
                to="/programs"
                className={scss.dropdown}
                onClick={scrollToTop}
              >
                <Link
                  to="/programs"
                  className={scss.dropdownTitle}
                  onClick={scrollToTop}
                >
                  {t("nav.programs")} <AiFillCaretDown /> <span></span>
                </Link>
                <div className={scss.dropdownItems}>
                  <Link to="/leasing" onClick={scrollToTop}>
                    {t("nav.leasing")}
                  </Link>
                </div>
              </NavLink>
              <NavLink to="/clients" onClick={scrollToTop}>
                {t("nav.client")} <span></span>
              </NavLink>
            </div>
            <div className={scss.nav__container_lang}>
              <span onClick={checkLangImg} value={"ru"}>
                <button
                  className={currentLang === "ru" && scss.active}
                  value={"ru"}
                  onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                >
                  {t("ru")}
                </button>
                <div></div>
              </span>
              <span onClick={checkLangImg} value={"uz"}>
                <button
                  className={currentLang === "uz" && scss.active}
                  value={"uz"}
                  onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                >
                  {t("uz")}
                </button>
                <div></div>
              </span>
            </div>
            {/* <div className={scss.nav__container_linkContact}>
							<Button btnTitle={"Контакты"} btnLink={"/contact"} />
						</div> */}
          </div>
        </div>
      </nav>
    </Suspense>
  );
};
export { Nav };
