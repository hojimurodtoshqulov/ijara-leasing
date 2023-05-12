import React from "react";
import "./funds.scss";
import Title from "../../components/title/title";
import { useTranslation } from "react-i18next";
import IntegerStep from "../../components/calculate/calculate";
import { Space } from "antd";
import img1 from "../../media/fundsImg.png";
const Funds = () => {
	const { t, i18n } = useTranslation();
	return (
		<main className="funds">
			<div className="container">
				<section className="funds__section">
					<Title title={t("fundsPage.title")} typed />
					<div className="funds__imgText">
						<img src={img1} alt="" />
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
