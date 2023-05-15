import React, {useRef, useEffect} from "react";
import "./funds.scss";
import Title from "../../components/title/title";
import { useTranslation } from "react-i18next";
import IntegerStep from "../../components/calculate/calculate";
import { Space } from "antd";
import img1 from "../../media/fundsImg.png";
import VanillaTilt from "vanilla-tilt";

const Funds = () => {
	const { t, i18n } = useTranslation();
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
		<main className="funds">
			<div className="container">
				<section className="funds__section">
					<Title title={t("fundsPage.title")} typed />
					<div className="funds__imgText">
						<Tilt options={options} className="funds__imgText_img">
							<img className="img" src={img1} alt={img1} />
							<div data-aos="fade-left" className="funds__imgText_div1"></div>
							<div data-aos="fade-right" className="funds__imgText_div2"></div>
						</Tilt>
						<p data-aos="flip-down" className="funds__par">
							{t("fundsPage.text")}
						</p>
					</div>
				</section>
				<Space style={{ width: "100%" }} direction="vertical">
					<IntegerStep />
				</Space>
			</div>
		</main>
	);
};

export default Funds;
