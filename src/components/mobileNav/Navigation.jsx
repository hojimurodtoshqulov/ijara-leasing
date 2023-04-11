import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import navLogo from "../../media/logo_head.png";
const variants = {
	open: {
		transition: { staggerChildren: 0.07, delayChildren: 0.2 },
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
	},
};

const variantsItem = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

export const Navigation = ({ toggleOpen }) => {
	const { i18n, t } = useTranslation();

	const currentLang = i18n.language === "en-US" ? "ru" : i18n.language;

	console.log(currentLang);

	const changeLang = (lngCode) => {
		i18n.changeLanguage(lngCode);
	};
	const scrollToTop = () => {
		toggleOpen();
		window.scrollTo(0, 0);
	};
	return (
		<motion.ul variants={variants}>
			<Link onClick={scrollToTop} className="logo" to="/">
				<img className="logo__img" src={navLogo} alt="nav logo" />
				<h3 className="logo__title">IJARA LEASING</h3>
			</Link>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.company")}
				href={"company"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.requisites")}
				href={"requisites"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.contact")}
				href={"contact"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.programs")}
				href={"programs"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.leasing")}
				href={"leasing"}
			/>
			<MenuItem
				toggleOpen={toggleOpen}
				title={t("nav.client")}
				href={"clients"}
			/>
			<motion.div
				variants={variantsItem}
				// whileHover={{ scale: 1.1 }}
				// whileTap={{ scale: 0.95 }}
			>
				<div className="langs_wrapper">
					<button
						className={`${"ru" === currentLang && "active"}`}
						onClick={() => changeLang("ru")}
					>
						{t("ru")}
					</button>
					<button
						className={`${"uz" === currentLang && "active"}`}
						onClick={() => changeLang("uz")}
					>
						{t("uz")}
					</button>
				</div>
			</motion.div>
		</motion.ul>
	);
};
