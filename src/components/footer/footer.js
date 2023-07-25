import { useEffect, useState } from "react";
import scss from "./footer.module.scss";
import logo from "../../media/logo_head.png";
import img1 from "../../media/Frame163.png";
import img2 from "../../media/Frame164.png";
import img3 from "../../media/Frame165.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
const Footer = () => {
	const [year, setyear] = useState(0);
	const { t } = useTranslation();
	useEffect(() => {});
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	const transition = { type: "spring", duration: 2 };
	return (
		<footer className={scss.footer}>
			<div className="container">
				<div className={scss.footer__row1}>
					<div className={scss.footer__row1_col1} data-aos="fade-left">
						<Link
							to="/"
							className={scss.footer__row1_col1_logo}
							onClick={scrollToTop}
						>
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
					<div className={scss.footer__row1_col2} data-aos="fade-down">
						<Link
							to="/company"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							<span>{t("nav.company")}</span> <p></p>
						</Link>
						<Link
							to="/requisites"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.requisites")}
							<p></p>
						</Link>
						<Link
							to="/contact"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.contact")} <p></p>
						</Link>
						<Link
							to="/programs"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							<span>{t("nav.programs")}</span> <p></p>
						</Link>
						<Link
							to="/leasing"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.leasing")} <p></p>
						</Link>
						<Link
							to="/funds"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							{t("nav.funds")} <p></p>
						</Link>
						<Link
							to="/clients"
							className={scss.footer__row1_col2_link}
							onClick={scrollToTop}
						>
							<span>{t("nav.client")}</span> <p></p>
						</Link>
					</div>
					<div className={scss.footer__row1_line}></div>
					<div className={scss.footer__row1_col3} data-aos="fade-right">
						<h1>{t("footer.addressTitle")}</h1>
						<p>{t("footer.addressText")}</p>
						<h1>{t("footer.tel")}</h1>
						<p>
							<a href="tel:+998991609000">+998 (99) 160-90-00</a>
							<a href="tel:+998991619000">+998 (99) 161-90-00</a>
						</p>
					</div>
				</div>
			</div>
			<div className={scss.footer__row2}>
				<motion.p
					initial={{
						transform: "rotate(30deg)",
						transformOrigin: " right top",
					}}
					whileInView={{
						transform: "rotate(0deg)",
						transformOrigin: " right top",
					}}
					transition={{ transition, duration: 1 }}
				>
					OOO &nbsp; <Link to="/">“IJARA LEASING”</Link>&nbsp; 2021 - 2023
					<span></span>
				</motion.p>
			</div>
		</footer>
	);
};
export default Footer;
