import scss from "./services.module.scss";
import img1 from "../../media/hand.png";
import img2 from "../../media/waveLine.png";
import Button from "../button/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Services = () => {
	const transition = { type: "spring", duration: 2 };
	const navigate = useNavigate();
	const { t } = useTranslation();
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<div className={scss.servicesDiv}>
			<div className="container">
				<div className={scss.services}>
					<div className={scss.services__images}>
						<motion.img
							initial={{
								left: "-10rem",
								transform: "rotate(20deg)",
								transformOrigin: " left top",
							}}
							whileInView={{
								left: "0",
								transform: "rotate(0deg)",
								transformOrigin: " left top",
							}}
							transition={{ transition, duration: 1 }}
							className={scss.services__images_img1}
							src={img1}
							alt="hand"
						/>
						<img
							className={scss.services__images_img2}
							src={img2}
							alt="waveLine"
						/>
					</div>
					<div data-aos="zoom-out-left" className={scss.services__elements}>
						<h1>
							<p>{t("home.services.title")}</p>{" "}
							<motion.span
								initial={{ width: "100px", left: "32rem" }}
								whileInView={{ width: "100px", left: "0" }}
								transition={{ transition, duration: 1 }}
							></motion.span>
						</h1>
						<p>{t("home.services.text")}</p>
						<div className={scss.services__elements_btn} onClick={scrollToTop}>
							<Button
								onClick={() => navigate("/leasing")}
								btnTitle={t("home.services.btnText")}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
