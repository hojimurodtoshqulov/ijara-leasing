import scss from "./leasingImages.module.scss";
import img1 from "../../media/car-rental.png";
import img2 from "../../media/kredit.png";
import img3 from "../../media/Autofficine.png";
import img4 from "../../media/lizing-pen.png";
import img5 from "../../media/auto-key.png";
import Modal from "../modal/modal";
import { useState } from "react";
import Carousel1 from "./carousel1/carousel1";
import Title from "../title/title";
import { useTranslation } from "react-i18next";

const LeasingImages = () => {
	const [openModal, setOpenModal] = useState(false);
	const [cardOreder, setcardOreder] = useState(0);
	const { t } = useTranslation();

	return (
		<>
			<div className={scss.leasingImagesDiv}>
				<div className="container">
					<Title title={t("home.leasingImages.title")} />
				</div>
				<div className={scss.leasingImages}>
					<div
						data-aos="flip-left"
						data-aos-delay="0"
						className={scss.leasingImages__imgDiv}
						onClick={() => {
							setcardOreder(0);
							setOpenModal(true);
						}}
					>
						<img src={img1} alt="car-rental" />
						<p>{t("home.leasingImages.catalog1")}</p>
					</div>
					<div
						data-aos="flip-left"
						data-aos-delay="100"
						className={scss.leasingImages__imgDiv}
						onClick={() => {
							setcardOreder(1);
							setOpenModal(true);
						}}
					>
						<img src={img2} alt="kredit" />
						<p>{t("home.leasingImages.catalog2")}</p>
					</div>
					<div
						data-aos="flip-left"
						data-aos-delay="200"
						className={scss.leasingImages__imgDiv}
						onClick={() => {
							setcardOreder(2);
							setOpenModal(true);
						}}
					>
						<img src={img3} alt="Autofficine" />
						<p>{t("home.leasingImages.catalog3")}</p>
					</div>
					<div
						data-aos="flip-left"
						data-aos-delay="300"
						className={scss.leasingImages__imgDiv}
						onClick={() => {
							setcardOreder(3);
							setOpenModal(true);
						}}
					>
						<img src={img4} alt="lizing-pen" />
						<p>{t("home.leasingImages.catalog4")}</p>
					</div>
					<div
						data-aos="flip-left"
						data-aos-delay="400"
						className={scss.leasingImages__imgDiv}
						onClick={() => {
							setcardOreder(4);
							setOpenModal(true);
						}}
					>
						<img src={img5} alt="auto-key" />
						<p>{t("home.leasingImages.catalog5")}</p>
					</div>
				</div>
				<Carousel1 setOpenModal={setOpenModal} setcardOreder={setcardOreder} />
			</div>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}
				theme={`leasingDatas ${cardOreder}`}
			/>
		</>
	);
};

export default LeasingImages;
