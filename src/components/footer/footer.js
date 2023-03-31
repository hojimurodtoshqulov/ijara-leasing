import scss from "./footer.module.scss";
import logo from "../../media/logo_head.png";
import { Link } from "react-router-dom";
const Footer = () => {
	return (
		<footer className={scss.footer}>
			<div className="container">
				<div className={scss.footer__row1}>
					<div className={scss.footer__row1_col1}>
						<Link to="/">
							<img src={logo} alt="" />
							<h2>ijara leasing</h2>
						</Link>
					</div>
					<div className={scss.footer__row1_line}></div>
					<div className={scss.footer__row1_col2}>
						<Link to="/" className={scss.footer__row1_col2_link}>
							<span>О компании</span>
						</Link>
						<Link to="/" className={scss.footer__row1_col2_link}>
							Реквизиты
						</Link>
						<Link to="/" className={scss.footer__row1_col2_link}>
							Контакты
						</Link>
						<Link to="/" className={scss.footer__row1_col2_link}>
							<span>Лизинговые программы</span>
						</Link>
						<Link to="/" className={scss.footer__row1_col2_link}>
							Экспресс лизинг
						</Link>
					</div>
					<div className={scss.footer__row1_line}></div>
					<div className={scss.footer__row1_col3}>
						<h1>Visit</h1>
						<p>Logan Barker, 865 Oak Boulevard, Elk Grove, Vermont 95184</p>
						<h1>Call</h1>
						<p>
							<Link to="tel:01761531774">017-6153-1774</Link>
						</p>
					</div>
				</div>
			</div>
			<div className={scss.footer__row2}>
				<p>
					OOO <Link to="/">“IJARA LEASING”</Link> 2021-2021
				</p>
			</div>
		</footer>
	);
};

export default Footer;
