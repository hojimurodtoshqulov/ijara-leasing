import React from "react";
import InfoCard from "../infoCard/infoCard";
import { useTranslation } from "react-i18next";
import styles from "./leasingService.module.scss";

import img1 from "../../media/car-rental.png";
import img2 from "../../media/kredit.png";
import img3 from "../../media/Autofficine.png";
import img4 from "../../media/lizing-pen.png";
import img5 from "../../media/auto-key.png";

const images = [img1, img2, img3, img4, img5];

const LeasingService = ({ theme }) => {
  const [_, order] = theme.split(" ");
  const { t } = useTranslation();
  
  return (
    <div className={styles.main}>
      <div className={styles.imgWrap}>
        <img src={images[order]} alt="" />
      </div>
      <div className={styles.content}>
        <h1>Lorem, ipsum dolor.</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolore?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus vero
          quasi dolor laudantium minus dolorum, adipisci dolorem at. Officia quo
          dicta, autem blanditiis molestias, quam odio optio nemo sit quisquam,
          reprehenderit provident ipsam eveniet alias. Laudantium labore
          excepturi veritatis quae.
        </p>
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
