import scss from "./header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../media/header_chevrolet.png";
import img2 from "../../media/header2.jpg";
import img3 from "../../media/pulqo'l1.png";
import Button from "../button/button";
import Categories from "../categories/categories";
import Modal from "../modal/modal";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	// const navigate = useNavigate();
	const { t } = useTranslation();
	const [selected, setSelected] = useState(0);
	const headerData = [
		{
			img: img1,
			title: t("home.q&a.slider1.title"),
			text: t("home.q&a.slider1.text"),
			div: (
				<div className={scss.header__container_elements}>
					<h1 data-aos="flip-up" data-aos-delay="0" data-aos-duration="500">
						{t("home.hero.title1")} <br />
					</h1>
					<h1 data-aos="flip-up" data-aos-delay="300" data-aos-duration="600">
						<span>{t("home.hero.title2")}</span>
					</h1>
					<p data-aos="flip-up" data-aos-delay="600">
						{t("home.hero.text")}
					</p>
					<div className={scss.header__container_elements_buttons}>
						<div
							className={scss.header__container_elements_buttons_div1}
							data-aos="flip-up"
							data-aos-delay="900"
						>
							<Button btnLink={"/company"} btnTitle={t("home.hero.btnText1")} />
						</div>
						<div
							onClick={() => {
								setOpenModal(true);
							}}
							className={scss.header__container_elements_buttons_div2}
							data-aos="flip-up"
							data-aos-delay="900"
						>
							<Button
								btnLink={"/"}
								btnTitle={t("home.hero.btnText2")}
								btnStyle={"emptyBtn"}
							/>
						</div>
					</div>
				</div>
			),
		},
		{
			img: img3,
			title: t("home.q&a.slider2.title"),
			text: t("home.q&a.slider2.text"),
			div: (
				<div className={scss.header__container_elements}>
					<h1 data-aos="flip-up" data-aos-delay="0" data-aos-duration="500">
						{t("home.hero.title1")} <br />
					</h1>
					<h1 data-aos="flip-up" data-aos-delay="300" data-aos-duration="600">
						<span>{t("home.hero.title2")}</span>
					</h1>
					<p data-aos="flip-up" data-aos-delay="600">
						{t("home.hero.text")}
					</p>
					<div className={scss.header__container_elements_buttons}>
						<div
							className={scss.header__container_elements_buttons_div1}
							data-aos="flip-up"
							data-aos-delay="900"
						>
							<Button btnLink={"/company"} btnTitle={t("home.hero.btnText1")} />
						</div>
						<div
							onClick={() => {
								setOpenModal(true);
							}}
							className={scss.header__container_elements_buttons_div2}
							data-aos="flip-up"
							data-aos-delay="900"
						>
							<Button
								btnLink={"/"}
								btnTitle={t("home.hero.btnText2")}
								btnStyle={"emptyBtn"}
							/>
						</div>
					</div>
				</div>
			),
		},
	];
	const tLength = headerData.length;
	const transition = { type: "spring", duration: 2 };
	const title = [<>{t("home.hero.title1")}</>, <>{t("home.hero2.title1")}</>];
	const titleSpan = [
		<>{t("home.hero.title2")}</>,
		<>{t("home.hero2.title2")}</>,
	];
	const texts = [<>{t("home.hero.text")}</>, <>{t("home.hero2.text")}</>];
	const btnLinks = ["/leasing", "/funds"];
	useEffect(() => {
		const interval = setInterval(() => {
			selected === tLength - 1
				? setSelected(0)
				: setSelected((prev) => prev ? 0 : 1);
		}, 4000);
		return () => clearInterval(interval);
	},[]);
	return (
		<>
			<div className={scss.header}>
				<div className="container">
					<div className={scss.header__container}>
						<motion.div className={scss.header__container_elements}>
							<motion.h1
								data-aos="flip-up"
								data-aos-delay="0"
								data-aos-duration="500"
								key={selected}
								// initial={{ opacity: 0, x: -80 }}
								// animate={{ opacity: 1, x: 0 }}
								// exit={{ opacity: 0, x: 80 }}
								transition={{ ...transition }}
							>
								{title[selected]} <br />
							</motion.h1>
							<motion.h1
								data-aos="flip-up"
								data-aos-delay="300"
								data-aos-duration="600"
								// initial={{ opacity: 0, x: 100 }}
								// animate={{ opacity: 1, x: 0 }}
								// exit={{ opacity: 0, x: -100 }}
								transition={{ ...transition, duration: 2 }}
							>
								<motion.span
									key={selected}
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ ...transition, duration: 2 }}
								>
									{titleSpan[selected]}
								</motion.span>
							</motion.h1>
							<p data-aos="flip-up" data-aos-delay="600">
								<motion.span
									key={selected}
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ ...transition, duration: 2 }}
								>
									{texts[selected]}
								</motion.span>
							</p>
							<div className={scss.header__container_elements_buttons}>
								<div
									className={scss.header__container_elements_buttons_div1}
									data-aos="flip-up"
									data-aos-delay="900"
								>
									<Button
										btnLink={btnLinks[selected]}
										btnTitle={t("home.hero.btnText1")}
									/>
								</div>
								<div
									onClick={() => {
										setOpenModal(true);
									}}
									className={scss.header__container_elements_buttons_div2}
									data-aos="flip-up"
									data-aos-delay="900"
								>
									<Button
										btnLink={"/"}
										btnTitle={t("home.hero.btnText2")}
										btnStyle={"emptyBtn"}
									/>
								</div>
							</div>
						</motion.div>
						<img
							className={scss.header__container_img}
							data-aos="fade-left"
							data-aos-duration="1500"
							key={selected}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ ...transition, duration: 2 }}
							src={headerData[selected].img}
							alt={headerData[selected].img}
							// src={img1}
							// alt="avto img"
						/>
						<img
							className={scss.header__container_imgMobile}
							src={img2}
							alt={img2}
						/>
					</div>
					<div className={scss.arrows}>
						<div
							className={scss.arrows_left}
							onClick={() => {
								selected === 0
									? setSelected(tLength - 1)
									: setSelected((prev) => prev - 1);
							}}
						>
							<HiArrowLongLeft />
						</div>
						<div
							className={scss.arrows_right}
							onClick={() => {
								selected === tLength - 1
									? setSelected(0)
									: setSelected((prev) => prev + 1);
							}}
						>
							<HiArrowLongRight />
						</div>
					</div>
				</div>
				<div className={scss.header__categories}>
					<Categories />
				</div>
				<div className={scss.header__darkBottom}></div>
			</div>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}
				theme="submit"
			/>
		</>
	);
};

export default Header;
