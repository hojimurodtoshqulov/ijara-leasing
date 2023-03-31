import Button from "../button/button";
import scss from "./submit.module.scss";

const Submit = () => {
	return (
		<div className={scss.submit}>
			<h1>Оставьте заявку на лизинг</h1>
			<p>Заполните форму, и мы перезвоним вам в ближайшее время</p>
			<div className={scss.submit__btn}>
				<Button btnTitle={"Оставить заявку"} />
			</div>
		</div>
	);
};

export default Submit;
