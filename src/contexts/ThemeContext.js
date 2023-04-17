import { useState, createContext } from "react";
export const DarkModeContext = createContext();
export const DarkModeProvider = (children) => {
	const [darkMode, setdarkMode] = useState(false);
	<DarkModeProvider.Provider value={[darkMode, setdarkMode]}>
		{children}
	</DarkModeProvider.Provider>;
};
// export const themes = {
//   dark: 'dark',
//   light: 'light',
// }

// export const ThemeContext = React.createContext({})
