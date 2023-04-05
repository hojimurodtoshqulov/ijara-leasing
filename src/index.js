import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./scss/main.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import "./i18n";
// import i18n from "i18next";
// import {useTranslation, initReactI18next} from "react-i18next";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<Suspense fallback="loading">
				<App />
			</Suspense>
		</BrowserRouter>
	</React.StrictMode>
);
// ReactDOM.render(
// 	<React.StrictMode>
// 		<BrowserRouter>
// 			<App />
// 		</BrowserRouter>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );
