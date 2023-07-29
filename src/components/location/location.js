import { useEffect } from "react";
import "./location.scss";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Location = () => {
	const { t } = useTranslation();
	const transition = { type: "spring", duration: 2 };

	return (
		<div className="map">
			<div className="container" data-aos="zoom-in-up" data-aos-duration="1500">
				<h1 data-aos="fade-up" data-aos-delay="300">
					<p>{t("map")}</p>
					<motion.span
						initial={{ width: "100px", left: "8rem" }}
						whileInView={{ width: "100px", left: "-0.1rem" }}
						transition={{ transition, duration: 1 }}
					></motion.span>
				</h1>
				<div
					className="mapDiv"
					style={{ position: "relative", overflow: "hidden" }}
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14865.136573970505!2d69.24519252353794!3d41.32301458802603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7165adc609%3A0x7f3a2c861f93967a!2sijaraleasing!5e0!3m2!1sru!2s!4v1690641201389!5m2!1sru!2s"
						width="100%"
						height="100%"
						style={{ border: "0" }}
						allowfullscreen=""
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default Location;
