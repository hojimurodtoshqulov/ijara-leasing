import CarImg from "../../media/requisities-img.png";
import Title from "../../components/title/title";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
const Requisites = () => {
	const { t } = useTranslation();
	const Tilt = (props) => {
		const { options, ...rest } = props;
		const tilt = useRef(null);

		useEffect(() => {
			VanillaTilt.init(tilt.current, options);
		}, [options]);

		return <div ref={tilt} {...rest} />;
	};
	const options = {
		scale: 1.1,
		speed: 1000,
		max: 15,
	};
	return (
		<div className="requisites">
			<Tilt options={options} className="side-img">
				<img className="img" src={CarImg} alt="" />
				<div data-aos="fade-left" className="side-img_div1"></div>
				<div data-aos="fade-right" className="side-img_div2"></div>
			</Tilt>
			<div className="container">
				<main className="requisites__content">
					<Title title={t("requisites.title")} typed />
					<section className="requisites__section">
						<Title
							small
							border={false}
							title={t("requisites.section1.title")}
						/>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section1.text")}
						</p>
					</section>
					<section className="requisites__section">
						<Title
							small
							border={false}
							title={t("requisites.section2.title")}
						/>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section2.text1")}.:{" "}
						</p>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section2.text2")}
							<a href="tel:+998 (99) 160-90-00">+998 (99) 160-90-00</a>,{" "}
							<a href="tel:+998 (99) 161-90-00">+998 (99) 161-90-00</a>
						</p>
					</section>
					<section className="requisites__section">
						<Title
							small
							border={false}
							title={t("requisites.section3.title")}
						/>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section3.text1")}
						</p>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section3.text2")}
						</p>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section3.text3")}
						</p>
						<p data-aos="fade-right" className="requisites__text">
							{t("requisites.section3.text4")}
						</p>
					</section>
				</main>
			</div>
		</div>
	);
};

export default Requisites;
