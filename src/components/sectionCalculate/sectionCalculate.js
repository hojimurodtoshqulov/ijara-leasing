import scss from "./sectionCalculate.module.scss";
import img1 from "../../media/hand1.png";
import img2 from "../../media/waveLine.png";
import Button from "../button/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const SectionCalculate = () => {
	const transition = { type: "spring", duration: 2 };
	const navigate = useNavigate();
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className={scss.sectionCalculateDiv}>
			<div className="container">
				<div className={scss.sectionCalculate}>
					<div
						data-aos="zoom-out-right"
						className={scss.sectionCalculate__elements}
					>
						<h1>
							<p>{t("home.calculate.title")}</p>{" "}
							<motion.span
								initial={{ width: "100px", left: "32rem" }}
								whileInView={{ width: "100px", left: "0" }}
								transition={{ transition, duration: 1 }}
							></motion.span>
						</h1>
						<p>{t("home.calculate.subtitle2")}</p>
						<div
							className={scss.sectionCalculate__elements_btn}
							onClick={scrollToTop}
						>
							<Button
								onClick={() => navigate("/leasing")}
								btnTitle={t("home.hero.btnText1")}
							/>
						</div>
					</div>
					<div
						data-aos="zoom-out-right"
						className={scss.sectionCalculate__elements}
					>
						<h1>
							<p>{t("home.hero2.title1")}</p>{" "}
							<motion.span
								initial={{ width: "100px", left: "32rem" }}
								whileInView={{ width: "100px", left: "0" }}
								transition={{ transition, duration: 1 }}
							></motion.span>
						</h1>
						<p>{t("fundsPage.text2")}</p>
						<div
							className={scss.sectionCalculate__elements_btn}
							onClick={scrollToTop}
						>
							<Button
								onClick={() => navigate("/funds")}
								btnTitle={t("home.hero.btnText1")}
							/>
						</div>
					</div>
					<div className={scss.sectionCalculate__images}>
						<motion.img
							initial={{
								left: "10rem",
								transform: "rotate(-20deg)",
								transformOrigin: " right top",
							}}
							whileInView={{
								left: "0",
								transform: "rotate(0deg)",
								transformOrigin: " left top",
							}}
							transition={{ transition, duration: 1 }}
							className={scss.sectionCalculate__images_img1}
							src={img1}
							alt="hand"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionCalculate;
