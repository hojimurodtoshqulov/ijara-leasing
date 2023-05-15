import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./leasingService.module.scss";
import img1 from "../../media/car-rental.png";
import img2 from "../../media/kredit.png";
import img3 from "../../media/Autofficine.png";
import img4 from "../../media/lizing-pen.png";
import img5 from "../../media/auto-key.png";

const LeasingService = ({ theme }) => {
	const [_, order] = theme.split(" ");
	const { t } = useTranslation();
	const images = [img1, img2, img3, img4, img5];
	const titles = [
		t("home.leasingImages.catalog1"),
		t("home.leasingImages.catalog2"),
		t("home.leasingImages.catalog3"),
		t("home.leasingImages.catalog4"),
		t("home.leasingImages.catalog5"),
	];
	const texts = [
		t("home.leasingImages.catalog1text"),
		t("home.leasingImages.catalog2text"),
		t("home.leasingImages.catalog3text"),
		t("home.leasingImages.catalog4text"),
		t("home.leasingImages.catalog5text"),
	];
	return (
		<div className={styles.main}>
			<div className={styles.imgWrap}>
				<img src={images[order]} alt="" />
			</div>
			<div className={styles.content}>
				<h1>{titles[order]}</h1>
				<p> {texts[order]} </p>
			</div>
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
