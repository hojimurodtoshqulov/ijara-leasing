import React, { Suspense } from "react";
import "./home.scss";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Nav } from "../../components/navbar/nav";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import LeasingImages from "../../components/leasingImages/leasingImages";
import IntegerStep from "../../components/calculate/calculate";
import { Space } from "antd";
import HelpTitle from "../../components/helpTitle/helpTitle";
import Services from "../../components/services/services";
import Submit from "../../components/submit/submit";
import AboutLeasing from "../../components/aboutLeasing/aboutLeasing";
import Location from "../../components/location/location";
import Ques_ans from "../../components/ques_ans/ques_ans";
const Home = () => {
	const handleClick = (e) => {
		i18next.changeLanguage(e.target.value);
	};
	const { t } = useTranslation();
	return (
		<Suspense fallback="loading">
			<div className="main home">
				<Nav onClick={(e) => handleClick(e)} />
				<input type="checkbox" id="navLinks__menu" />
				<label htmlFor="navLinks__menu" className="navLinks__menu"></label>
				<Header />
				<LeasingImages />
				<Space style={{ width: "100%" }} direction="vertical">
					<IntegerStep />
				</Space>
				<HelpTitle />
				<Services />
				<Submit />
				<AboutLeasing />
				<Ques_ans />
				<Location />
				<Footer />
			</div>
			<div className="success">
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
			</div>
		</Suspense>
	);
};
export { Home };
