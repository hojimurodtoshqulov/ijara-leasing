import { useTranslation } from "react-i18next";
import scss from "./categories.module.scss";
import { BsCheckCircle, BsCheck2Circle } from "react-icons/bs";
const Categories = () => {
	const { t } = useTranslation();
	return (
		<div className="container">
			<div className={scss.categories}>
				<div
					data-aos="fade-left"
					data-aos-delay="0"
					className={scss.categories__titles}
				>
					<p>
						<span>
							<BsCheckCircle />
						</span>
						{t("home.hero.category1")}
					</p>
				</div>
				<div className={scss.categories__line}></div>
				<div
					data-aos="fade-left"
					data-aos-delay="100"
					className={scss.categories__titles}
				>
					<p>
						<span>
							<BsCheckCircle />
						</span>
						{t("home.hero.category2")}
					</p>
				</div>
				<div className={scss.categories__line}></div>
				<div
					data-aos="fade-left"
					data-aos-delay="200"
					className={scss.categories__titles}
				>
					<p>
						<span>
							<BsCheckCircle />
						</span>
						{t("home.hero.category3")}
					</p>
				</div>
			</div>
		</div>
	);
};
export default Categories;
