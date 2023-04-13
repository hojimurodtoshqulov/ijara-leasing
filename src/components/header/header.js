import scss from "./header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../media/header_chevrolet.png";
import img2 from "../../media/header2.jpg";
import Button from "../button/button";
import Categories from "../categories/categories";
import Modal from "../modal/modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";
const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const navigate = useNavigate();
	const { t } = useTranslation();
	return (
		<>
			<div className={scss.header}>
				<div className="container">
					<div className={scss.header__container}>
						<div className={scss.header__container_elements}>
							<h1 data-aos="flip-up" data-aos-delay="0" data-aos-duration="500">
								{t("home.hero.title1")} <br />
							</h1>
							<h1
								data-aos="flip-up"
								data-aos-delay="300"
								data-aos-duration="600"
							>
								<span>{t("home.hero.title2")}</span>
							</h1>
							<p data-aos="flip-up" data-aos-delay="600">
								{t("home.hero.text")}
							</p>
							<div
								className={scss.header__container_elements_buttons}
								data-aos="flip-up"
								data-aos-delay="900"
							>
								<div className={scss.header__container_elements_buttons_div1}>
									<Button
										btnLink={"/company"}
										btnTitle={t("home.hero.btnText1")}
									/>
								</div>
								<div
									onClick={() => {
										setOpenModal(true);
									}}
									className={scss.header__container_elements_buttons_div2}
								>
									<Button
										btnLink={"/"}
										btnTitle={t("home.hero.btnText2")}
										btnStyle={"emptyBtn"}
									/>
								</div>
							</div>
						</div>
						<img
							className={scss.header__container_img}
							data-aos="fade-left"
							data-aos-duration="1500"
							className={scss.header__container_img}
							src={img1}
							alt="avto img"
						/>
						<img
							className={scss.header__container_imgMobile}
							src={img2}
							alt={img2}
						/>
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
