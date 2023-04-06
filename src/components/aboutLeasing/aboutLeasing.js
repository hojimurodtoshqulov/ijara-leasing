import scss from "./aboutLeasing.module.scss";
import img1 from "../../media/image106.png";
import img2 from "../../media/library.png";
import img3 from "../../media/thought.png";
import img4 from "../../media/sincerely.png";
import { motion } from "framer-motion";

const AboutLeasing = () => {
	const transition = { type: "spring", duration: 2 };

	return (
		<div className={scss.aboutLeasingDiv}>
			<div className="container">
				<div className={scss.aboutLeasing}>
					<div className={scss.aboutLeasing__col1}>
						<div className={scss.aboutLeasing__col1_titles}>
							<motion.div
								initial={{ height: "0px" }}
								whileInView={{ height: "80px" }}
								transition={{ transition, duration: 1 }}
							></motion.div>
							<h1 data-aos="flip-up">
								<p> О лизинге</p>
								<motion.span
									initial={{ left: "16rem" }}
									whileInView={{ left: "0" }}
									transition={{ transition, duration: 1 }}
								></motion.span>
							</h1>
						</div>
						<div className={scss.aboutLeasing__col1_texts}>
							<p data-aos="flip-up" data-aos-delay="0">
								<span>Лизинг - </span> это самый выгодный способ приобрести
								личный автомобиль для юридических лиц.
							</p>
							<p data-aos="flip-up" data-aos-delay="100">
								<span> Небольшой залог.</span> Машину в лизинг можно приобрести
								без залога или с минимальным залогом. Это удобно, если ваша
								компания не готова вкладывать значительные средства в
								первоначальный взнос при кредите.
							</p>
							<p data-aos="flip-up" data-aos-delay="200">
								<span>Налог.</span> Лизинг позволяет значительно экономить на
								налоге на прибыль. Ежемесячные платежи (включая налог на
								имущество и транспорт, страховку, аванс) включаются в
								себестоимость.
							</p>
							<p data-aos="flip-up" data-aos-delay="300">
								<span>Специальные предложения.</span> «Ijara Leasing»
								сотрудничает напрямую с производителями и предлагает автомобили
								с ценами, которые часто недоступны другим компаниям и
								автосалонам.
							</p>
							<p data-aos="flip-up" data-aos-delay="400">
								<span>Быстрое оформление.</span> Для оформления машины в лизинг
								вам не придется собирать большой пакет документов,
								автомобильсможет работать и приносить прибыль уже через пару
								дней после того как вы оставите заявку. При этом машина поступит
								на баланс лизингодателя.
							</p>
							<p data-aos="flip-up" data-aos-delay="500">
								<span>Комплексное обслуживание. </span>«Ijara Leasing» не только
								предложит выгодные условия приобретения автомобиля, но и
								обеспечивает льготные условия его страхования.
							</p>
						</div>
					</div>
					<div className={scss.aboutLeasing__col2}>
						<motion.img
							initial={{
								opacity: "0",
								// right: "-20rem",
								transform: "rotate(5deg)",
								transformOrigin: " right top",
							}}
							whileInView={{
								opacity: "1",
								// right: "-11rem",
								transform: "rotate(0deg)",
								transformOrigin: " right top",
							}}
							transition={{ transition, duration: 0.8 }}
							className={scss.aboutLeasing__col2_img1}
							src={img1}
							alt=""
						/>
						<motion.img
							initial={{
								opacity: "0",
								// right: "-20rem",
								transform: "rotate(-5deg)",
								transformOrigin: " right top",
							}}
							whileInView={{
								opacity: "1",
								// right: "-9rem",
								transform: "rotate(5deg)",
								transformOrigin: " right top",
							}}
							transition={{ transition, duration: 0.8 }}
							className={scss.aboutLeasing__col2_img2}
							src={img2}
							alt=""
						/>
						<motion.img
							initial={{
								opacity: "0",
								// right: "-20rem",
								transform: "rotate(5deg)",
								transformOrigin: " right bottom",
							}}
							whileInView={{
								opacity: "1",
								// right: "-1.5rem",
								transform: "rotate(-5deg)",
								transformOrigin: " right bottom",
							}}
							transition={{ transition, duration: 0.8 }}
							className={scss.aboutLeasing__col2_img3}
							src={img3}
							alt=""
						/>
						<motion.img
							initial={{
								opacity: "0",
								// right: "-20rem",
								transform: "rotate(5deg)",
								transformOrigin: " right bottom",
							}}
							whileInView={{
								opacity: "1",
								// right: "-1.5rem",
								transform: "rotate(-5deg)",
								transformOrigin: " right bottom",
							}}
							transition={{ transition, duration: 0.8 }}
							className={scss.aboutLeasing__col2_img4}
							src={img4}
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutLeasing;
