import scss from "./helpTitle.module.scss";
import Button from "../button/button";

const HelpTitle = () => {
	return (
		<div className={scss.helpTitleDiv}>
			<div className="container">
				<div className={scss.helpTitle}>
					<h1>
						<p>Поможем вам <br /> с выбором</p> <span></span>
					</h1>
					<div className={scss.helpTitle__elements}>
						<div className={scss.helpTitle__elements_row1}>
							<div></div>
							<p>
								Оставьте заявку, и мы поможем. За 2-3 минуты дадим консультацию
								о лизинге и подберем подходящий товар.
							</p>
						</div>
						<div className={scss.helpTitle__elements_btn}>
							<Button btnTitle={"Подобрать товар"} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HelpTitle;
