import React from "react";
import "./carousel1.scss";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const Carousel1 = () => {
	const data = [
		{
 			img: "https://www.bankofengland.co.uk/-/media/boe/images/education-and-engagement/education/teacher-resource-image-1-web.jpg?h=347&la=en&mh=347&mw=520&w=520&hash=76512627AB76D24E22CFC00C41AD0BA59F624BA9",
			title: "img 1",
			link: "/study",
		},
		{
			img: "https://www.educationperfect.com/wp-content/uploads/2022/11/Generic_Happyhighschoolgirlusinglaptopinclassroom_1500px.webp",
			title: "img 2",
			link: "/study",
		},
		{
			img: "https://alis.alberta.ca/media/2149/students-in-class.jpg?anchor=center&mode=crop&width=606&height=440&rnd=131868559330000000",
			title: "img 3",
			link: "/study",
		},
		{
			img: "https://www.cdc.gov/healthyyouth/protective/images/EDkQGdeXkAIiM0q.jpg?_=56749",
			title: "img 4",
			link: "/study",
		},
	];
	const NextArrow = ({ onClick }) => (
		<div className="arrow next" onClick={onClick}>
			<FaArrowRight />
		</div>
	);
	const PrevArrow = ({ onClick }) => (
		<div className="arrow prev" onClick={onClick}>
			<FaArrowLeft />
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
					<div key={index} className={index === imageIndex ? "slide active" : "slide"}>
						<img src={item.img} alt={item.img} />
						<Link to={item.link} className="link">
							{item.title}
						</Link>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel1;
