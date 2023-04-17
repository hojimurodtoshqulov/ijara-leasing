// import React, { useContext } from "react";
// // import { ProductsData } from "../../contexts/context";
// import styles from "./theme.module.scss";

// export default function SwitchButton() {
//    const { isDarkMode, setIsDarkMode } = useContext(ProductsData);
//    return (
//       <div className={styles.wrapper}>
//          <input
//             checked={isDarkMode}
//             className={styles.input}
//             type="checkbox"
//             id="toggleTheme"
//             onChange={() => {
//                setIsDarkMode((prevVal) => {
//                   localStorage.setItem("isDarkMode", !prevVal);
//                   return !prevVal;
//                });
//             }}
//          />
//          <label className={styles.label} htmlFor="toggleTheme">
//             <span className={styles.button}></span>
//          </label>
//       </div>
//    );
// }

import React from "react";
import scss from "./toggleTheme.module.scss";
import sun from "../../media/sun-solid.svg";
import moon from "../../media/moon-solid.svg";
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
				// onClick={onChange}
				onChange={toggleTheme}
				checked={value}
				readOnly
			/>
			<span className={scss.switch__sun}>
				<img src={sun} alt={sun} />
			</span>
			<span className={scss.switch__moon} style={{ color: color }}>
				<FaMoon />
				{/* <img src={moon} alt={moon} /> */}
			</span>
			{/* <span className={styles.slider} />
		<span className={styles.wave} /> */}
		</label>
	);
};
export default Toggle;
