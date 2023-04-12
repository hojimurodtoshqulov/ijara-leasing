import { useTranslation } from "react-i18next";
import Button from "../button/button";
import scss from "./submit.module.scss";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../modal/modal";
const Submit = () => {
	const [openModal, setOpenModal] = useState(false);
	const transition = { type: "spring", duration: 2, ease: "easeOut" };
	const { t } = useTranslation();
	return (
		<>
			<div className={scss.submit}>
				<div className="container">
					<div
						// data-aos="zoom-in-up"
						className={scss.submit__elements}
					>
						<h1 data-aos="flip-up" data-aos-delay="100">
							{t("home.submit.title")}
						</h1>
						<p data-aos="flip-up" data-aos-delay="200">
							{t("home.submit.text")}
						</p>
						<div
							data-aos="flip-up"
							data-aos-delay="300"
							className={scss.submit__elements_btn}
							onClick={() => {
								setOpenModal(true);
							}}
						>
							<Button btnTitle={t("home.submit.btnText")} />
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
			</div>
			<Modal
				open={openModal}
				onClose={() => setOpenModal(false)}
				theme="submit"
			/>
		</>
	);
};

export default Submit;
// animation: light 1s ease-in 0s 1 alternate;
