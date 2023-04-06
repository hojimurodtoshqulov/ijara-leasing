import Button from "../button/button";
import scss from "./submit.module.scss";
import { motion } from "framer-motion";

const Submit = () => {
	const transition = { type: "spring", duration: 2, ease: "easeOut" };
	return (
		<div className={scss.submit}>
			<div
				// data-aos="zoom-in-up"
				className={scss.submit__elements}
			>
				<h1 data-aos="flip-up" data-aos-delay="100">
					Оставьте заявку на лизинг
				</h1>
				<p data-aos="flip-up" data-aos-delay="200">
					Заполните форму, и мы перезвоним вам в ближайшее время
				</p>
				<div
					data-aos="flip-up"
					data-aos-delay="300"
					className={scss.submit__elements_btn}
				>
					<Button btnTitle={"Оставить заявку"} />
				</div>
			</div>
			<motion.div
				initial={{ opacity: "1" }}
				whileInView={{ opacity: "0" }}
				exit={{ opacity: "1" }}
				transition={{ ...transition, duration: 2 }}
				className={scss.submit__lightLeft}
			></motion.div>
			<motion.div
				initial={{ opacity: "1" }}
				whileInView={{ opacity: "0" }}
				transition={{ ...transition, duration: 2 }}
				className={scss.submit__lightRight}
			></motion.div>
		</div>
	);
};

export default Submit;
// animation: light 1s ease-in 0s 1 alternate;
