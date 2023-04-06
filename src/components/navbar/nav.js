import React, { Suspense } from "react";
import { useState, useEffect } from "react";
import navLogo from "../../media/logo_head.png";
import scss from "./nav.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "../button/button";
const Nav = ({ onClick }) => {
  const [navSize, setnavSize] = useState("100px");
  const [navColorBg, setnavColorBg] = useState("transparent");
  const [navLogoFSZ, setNavLogoFSZ] = useState("20px");
  const [navContainerBR, setNavContainerBR] = useState("2px solid #fff");
  const listenScrollEvent = () => {
    window.scrollY > 100
      ? setnavColorBg("#0e0e12f0")
      : setnavColorBg("transparent");
    window.scrollY > 100 ? setnavSize("80px") : setnavSize("110px");
    window.scrollY > 100 ? setNavLogoFSZ("15px") : setNavLogoFSZ("20px");
    window.scrollY > 100
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
  const checkLangImg = (e) => {
    if (e.target.value === "ru") {
      i18n.changeLanguage("ru");
      setLangCheck(2);
    } else {
      setLangCheck(1);
      i18n.changeLanguage("uz");
    }
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
            <Link className={scss.nav__container_logo} to="/">
              <img src={navLogo} alt="nav logo" />
              <h3 style={{ fontSize: navLogoFSZ }}>IJARA LEASING</h3>
            </Link>
            <div className={scss.nav__container_links}>
              <NavLink to="/company">
                О компании <AiFillCaretDown />
                <span></span>
              </NavLink>
              <NavLink to="/leasing">
                Лизинговые программы <AiFillCaretDown />
                <span></span>
              </NavLink>
              <NavLink to="/client">
                Для клиентов <span></span>
              </NavLink>
            </div>
            <div className={scss.nav__container_lang}>
              <span onClick={checkLangImg} value={"ru"}>
                <button
                  className={langCheck === 1 ? `${scss.active}` : null}
                  value={"ru"}
                  onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                >
                  Ru
                </button>
                <div></div>
              </span>
              <span onClick={checkLangImg} value={"uz"}>
                <button
                  className={scss.nav__container_lang_btn}
                  value={"uz"}
                  onClick={onClick}
                  type="btn"
                  style={{ color: langColor }}
                >
                  Uz
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
