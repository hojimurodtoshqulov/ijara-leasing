import scss from "./helpTitle.module.scss";
import Button from "../button/button";
import { motion } from "framer-motion";

const HelpTitle = () => {
	const transition = { type: "spring", duration: 2 };

	return (
		<div className={scss.helpTitleDiv}>
			<div className="container">
				<div className={scss.helpTitle} data-aos="fade-left">
					<h1>
						<p data-aos="flip-up" data-aos-delay="0">
							Поможем вам <br /> с выбором
						</p>
						<motion.span
							initial={{ width: "0px" }}
							whileInView={{ width: "100px" }}
							transition={{ transition }}
						></motion.span>
					</h1>
					<div className={scss.helpTitle__elements}>
						<div className={scss.helpTitle__elements_row1}>
							<motion.div
								initial={{ height: "0px" }}
								whileInView={{ height: "112px" }}
								transition={{ transition }}
							></motion.div>
							<p data-aos="flip-up" data-aos-delay="100">
								Оставьте заявку, и мы поможем. За 2-3 минуты дадим консультацию
								о лизинге и подберем подходящий товар.
							</p>
						</div>
						<div
							className={scss.helpTitle__elements_btn}
							data-aos="flip-up"
							data-aos-delay="200"
						>
							<Button btnTitle={"Подобрать товар"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpTitle;
