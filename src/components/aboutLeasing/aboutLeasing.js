import scss from "./aboutLeasing.module.scss";
import img1 from "../../media/image106.png";
import img2 from "../../media/library.png";
import img3 from "../../media/thought.png";
import img4 from "../../media/sincerely.png";
const AboutLeasing = () => {
	return (
		<div className={scss.aboutLeasingDiv}>
			<div className="container">
				<div className={scss.aboutLeasing}>
					<div className={scss.aboutLeasing__col1}>
						<div className={scss.aboutLeasing__col1_titles}>
							<div></div>
							<h1>
								<p> О лизинге</p>
								<span></span>
							</h1>
						</div>
						<div className={scss.aboutLeasing__col1_texts}>
							<p>
								<span>Лизинг - </span> это самый выгодный способ приобрести
								личный автомобиль для юридических лиц.
							</p>
							<p>
								<span> Небольшой залог.</span> Машину в лизинг можно приобрести
								без залога или с минимальным залогом. Это удобно, если ваша
								компания не готова вкладывать значительные средства в
								первоначальный взнос при кредите.
							</p>
							<p>
								<span>Налог.</span> Лизинг позволяет значительно экономить на
								налоге на прибыль. Ежемесячные платежи (включая налог на
								имущество и транспорт, страховку, аванс) включаются в
								себестоимость.
							</p>
							<p>
								<span>Специальные предложения.</span> «Ijara Leasing»
								сотрудничает напрямую с производителями и предлагает автомобили
								с ценами, которые часто недоступны другим компаниям и
								автосалонам.
							</p>
							<p>
								<span>Быстрое оформление.</span> Для оформления машины в лизинг
								вам не придется собирать большой пакет документов,
								автомобильсможет работать и приносить прибыль уже через пару
								дней после того как вы оставите заявку. При этом машина поступит
								на баланс лизингодателя.
							</p>
							<p>
								<span>Комплексное обслуживание. </span>«Ijara Leasing» не только
								предложит выгодные условия приобретения автомобиля, но и
								обеспечивает льготные условия его страхования.
							</p>
						</div>
					</div>
					<div className={scss.aboutLeasing__col2}>
						<img className={scss.aboutLeasing__col2_img1} src={img1} alt="" />
						<img className={scss.aboutLeasing__col2_img2} src={img2} alt="" />
						<img className={scss.aboutLeasing__col2_img3} src={img3} alt="" />
						<img className={scss.aboutLeasing__col2_img4} src={img4} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutLeasing;
