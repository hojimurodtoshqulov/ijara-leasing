import scss from "./leasingImages.module.scss";
import img1 from "../../media/car-rental.png";
import img2 from "../../media/kredit.png";
import img3 from "../../media/Autofficine.png";
import img4 from "../../media/lizing-pen.png";
import img5 from "../../media/auto-key.png";
const LeasingImages = () => {
	return (
		<div className={scss.leasingImages}>
			<div
				data-aos="flip-left"
				data-aos-delay="0"
				className={scss.leasingImages__imgDiv}
			>
				<img src={img1} alt="car-rental" />
				<p>1Lorem, ipsum.</p>
			</div>
			<div
				data-aos="flip-left"
				data-aos-delay="100"
				className={scss.leasingImages__imgDiv}
			>
				<img src={img2} alt="kredit" />
				<p>2Lorem, ipsum.</p>
			</div>
			<div
				data-aos="flip-left"
				data-aos-delay="200"
				className={scss.leasingImages__imgDiv}
			>
				<img src={img3} alt="Autofficine" />
				<p>3Lorem, ipsum.</p>
			</div>
			<div
				data-aos="flip-left"
				data-aos-delay="300"
				className={scss.leasingImages__imgDiv}
			>
				<img src={img4} alt="lizing-pen" />
				<p>4Lorem, ipsum.</p>
			</div>
			<div
				data-aos="flip-left"
				data-aos-delay="400"
				className={scss.leasingImages__imgDiv}
			>
				<img src={img5} alt="auto-key" />
				<p>5Lorem, ipsum.</p>
			</div>
		</div>
	);
};

export default LeasingImages;
