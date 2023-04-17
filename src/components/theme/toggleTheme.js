import React from "react";
import scss from "./toggleTheme.module.scss";
import sun from "../../media/sun-solid.svg";
// import moon from "../../media/moon-solid.svg";
import { FaMoon } from "react-icons/fa";
const Toggle = ({ value, onChange, color }) => {
	const setDarkMode = () => {
		document.querySelector("body").setAttribute("data-theme", "dark");
	};
	const setLightMode = () => {
		document.querySelector("body").setAttribute("data-theme", "light");
	};
	const toggleTheme = (e) => {
		if (e.target.checked) setDarkMode();
		else setLightMode();
	};
	return (
		<label className={scss.switch} htmlFor="toggler">
			<input
				id="toggler"
				type="checkbox"
				onChange={toggleTheme}
				checked={value}
				readOnly
			/>
			<span className={scss.switch__sun}>
				<img src={sun} alt={sun} />
			</span>
			<span className={scss.switch__moon} style={{ color: color }}>
				<FaMoon />
			</span>
		</label>
	);
};
export default Toggle;