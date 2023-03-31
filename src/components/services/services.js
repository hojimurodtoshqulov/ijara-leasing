import scss from "./services.module.scss";
import img1 from "../../media/hand.png";
import img2 from "../../media/waveLine.png";
import Button from "../button/button";
const Services = () => {
	return (
		<div className={scss.servicesDiv}>
			<div className="container">
				<div className={scss.services}>
					<div className={scss.services__images}>
						<img className={scss.services__images_img1} src={img1} alt="hand" />
						<img
							className={scss.services__images_img2}
							src={img2}
							alt="waveLine"
						/>
					</div>
					<div className={scss.services__elements}>
						<h1>
							<p>Услуги «Ijara Leasing»</p> <span></span>
						</h1>
						<p>Выберите предложение для вашего бизнеса</p>
						<div className={scss.services__elements_btn}>
							<Button btnTitle={"Экспресс лизинг"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
