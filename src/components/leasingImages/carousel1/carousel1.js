import React from "react";
import "./carousel1.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import img1 from "../../../media/car-rental.png";
import img2 from "../../../media/kredit.png";
import img3 from "../../../media/Autofficine.png";
import img4 from "../../../media/lizing-pen.png";
import img5 from "../../../media/auto-key.png";
const Carousel1 = ({ openModal, setcardOreder, setOpenModal }) => {
	const { t } = useTranslation();
	const [openModal1, setOpenModal1] = useState(openModal);
	const [cardOreder1, setcardOreder1] = useState(setcardOreder);
	const data = [
		{
			img: img1,
			title: t("home.leasingImages.catalog1"),
			link: "/study",
		},
		{
			img: img2,
			title: t("home.leasingImages.catalog2"),
			link: "/study",
		},
		{
			img: img3,
			title: t("home.leasingImages.catalog3"),
			link: "/study",
		},
		{
			img: img4,
			title: t("home.leasingImages.catalog4"),
			link: "/study",
		},
		{
			img: img5,
			title: t("home.leasingImages.catalog5"),
			link: "/study",
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className="arrow next" onClick={onClick}>
			<AiFillRightCircle />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className="arrow prev" onClick={onClick}>
			<AiFillLeftCircle />
		</div>
	);
	const [imageIndex, setImageIndex] = useState(0);
	const settings = {
		infinite: true,
		lazyload: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
	};
	return (
		<div className="carousel1">
			<Slider {...settings}>
				{data.map((item, index) => (
					<div
						key={index}
						className={index === imageIndex ? "slide active" : "slide"}
						onClick={() => {
							setOpenModal(true);
							setcardOreder(index);
						}}
					>
						<img src={item.img} alt={item.img} />
						<p className="link">
							{item.title}
						</p>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel1;
