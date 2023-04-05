import scss from "./categories.module.scss";
import { BsCheckCircle, BsCheck2Circle } from "react-icons/bs";
const Categories = () => {
	return (
		<div className="container">
			<div className={scss.categories}>
				<div
					data-aos="fade-left"
					data-aos-delay="0"
					className={scss.categories__titles}
				>
					<span>
						<BsCheckCircle />
					</span>
					<p>Быстрое оформление документов</p>
				</div>
				<div className={scss.categories__line}></div>
				<div
					data-aos="fade-left"
					data-aos-delay="100"
					className={scss.categories__titles}
				>
					<span>
						<BsCheckCircle />
					</span>
					<p>Выгодные условия</p>
				</div>
				<div className={scss.categories__line}></div>
				<div
					data-aos="fade-left"
					data-aos-delay="200"
					className={scss.categories__titles}
				>
					<span>
						<BsCheckCircle />
					</span>
					<p>Скидки от производителей</p>
				</div>
			</div>
		</div>
	);
};
export default Categories;
