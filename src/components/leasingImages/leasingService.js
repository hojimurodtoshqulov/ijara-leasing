import React from "react";
import InfoCard from "../infoCard/infoCard";
import { useTranslation } from "react-i18next";

const LeasingService = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h1>Lorem, ipsum dolor.</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolore?
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vero
				quasi dolor laudantium minus dolorum, adipisci dolorem at. Officia quo
				dicta, autem blanditiis molestias, quam odio optio nemo sit quisquam,
				reprehenderit provident ipsam eveniet alias. Laudantium labore excepturi
				veritatis quae, sed nobis ullam ad dolorem iure mollitia doloremque
				aliquid nisi?
			</p>
			{/* <div className="leasing__cards">
				<InfoCard text={t("leasingPage.cards.card1")} title={"18-48"} />
				<InfoCard text={t("leasingPage.cards.card2")} title={"36%"} />
				<InfoCard text={t("leasingPage.cards.card3")} title={"20%"} />
				<InfoCard text={t("leasingPage.cards.card4")} title={"2%"} />
			</div> */}
		</div>
	);
};

export default LeasingService;
