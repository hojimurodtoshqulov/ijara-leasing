import "./scss/main.scss";
import { Home } from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Company from "./pages/company/company";
import { Routes, Route } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import Layout from "./layout/layout";
import Requisites from "./pages/requisites/requisites";
import Leasing from "./pages/leasing/leasing";
import Programs from "./pages/programs/programs";
import "./i18n";
import Clients from "./pages/clients/clients";
import Funds from "./pages/funds/funds";
const App = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, mirror: true });
	}, []);
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route exact path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/company" element={<Company />} />
					<Route path="/requisites" element={<Requisites />} />
					<Route path="/leasing" element={<Leasing />} />
					<Route path="/funds" element={<Funds />} />
					<Route path="/programs" element={<Programs />} />
					<Route path="/clients" element={<Clients />} />
				</Route>

			</Routes>
		</>
	);
};

export default App;
