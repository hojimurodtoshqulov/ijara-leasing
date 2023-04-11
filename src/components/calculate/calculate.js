import scss from "./calculate.scss";
import { Col, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Calculate = () => {
	const { t } = useTranslation();

	const [inputValue, setInputValue] = useState(2000000);
	const [inputValue2, setInputValue2] = useState(1000000);
	const [inputValue3, setInputValue3] = useState(13);
	const [sum, setSum] = useState(1472500);
	const [sum2, setSum2] = useState(54537);
	// const onChangeSum = (newValue) => {
	// 	newValue = sum + 10;
	// 	setSum(newValue);
	// };
	const onChange = (newValue) => {
		setInputValue(newValue);
	};
	const onChange2 = (newValue) => {
		setInputValue2(newValue);
	};
	const onChange3 = (newValue) => {
		setInputValue3(newValue);
	};
	const transition = { type: "spring", duration: 2 };

	return (
		<div className="calculate">
			<div className="container">
				<div className="calculate__titles" data-aos="fade-up">
					<h1>{t("home.calculate.title")}</h1>
					<motion.div
						initial={{ width: "0%" }}
						whileInView={{ width: "45%" }}
						transition={{ transition }}
					></motion.div>
					<p>{t("home.calculate.subtitle")}</p>
				</div>
				<div className="calculate__calculates">
					<div className="calculate__calculates_col1">
						<h1>
							<p>{t("home.calculate.calculator")}</p>{" "}
							<motion.span
								initial={{ width: "0%" }}
								whileInView={{ width: "30%" }}
								transition={{ transition }}
							></motion.span>{" "}
							<motion.div
								initial={{ width: "0%" }}
								whileInView={{ width: "65%" }}
								transition={{ transition }}
							></motion.div>
						</h1>
						<div
							data-aos="flip-up"
							data-aos-delay="0"
							className="calculate__calculates_col1_slider1"
						>
							<h4 className="calculate__calculates_col1_slider1-title">
								{t("home.calculate.calcTitle1")}
							</h4>
							<Row className="row">
								<Col className="row__col" span={12}>
									<Slider
										className="row__col_slider"
										min={2000000}
										max={100000000}
										onChange={onChange}
										value={typeof inputValue === "number" ? inputValue : 0}
									/>
								</Col>
								<div className="calculate__calculates_col1_slider1_inp">
									<Col
										span={4}
										className="calculate__calculates_col1_slider1_inp-col"
									>
										<InputNumber
											className="calculate__calculates_col1_slider1_inp-col-input"
											min={2000000}
											max={100000000}
											style={{ margin: "0 16px" }}
											value={inputValue}
											onChange={onChange}
										/>
										<p>{t("sum")}</p>
									</Col>
								</div>
							</Row>
							<p className="calculate__calculates_col1_slider1-priceStart">
								2 000 000 {t("sum")}
							</p>
							<p className="calculate__calculates_col1_slider1-priceEnd">
								100 000 000 {t("sum")}
							</p>
						</div>
						<div
							data-aos="flip-up"
							data-aos-delay="100"
							className="calculate__calculates_col1_slider1"
						>
							<h4 className="calculate__calculates_col1_slider1-title">
								{t("home.calculate.calcTitle2")}
							</h4>
							<Row className="row">
								<Col className="row__col" span={12}>
									<Slider
										className="row__col_slider"
										min={1000000}
										max={50000000}
										onChange={onChange2}
										value={typeof inputValue2 === "number" ? inputValue2 : 0}
									/>
								</Col>
								<div className="calculate__calculates_col1_slider1_inp">
									<Col
										span={4}
										className="calculate__calculates_col1_slider1_inp-col"
									>
										<InputNumber
											className="calculate__calculates_col1_slider1_inp-col-input"
											min={1000000}
											max={50000000}
											style={{ margin: "0 16px" }}
											value={inputValue2}
											onChange={onChange2}
										/>
										<p>{t("sum")}</p>
									</Col>
								</div>
							</Row>
							<p className="calculate__calculates_col1_slider1-priceStart">
								1 000 000 {t("sum")}
							</p>
							<p className="calculate__calculates_col1_slider1-priceEnd">
								50 000 000 {t("sum")}
							</p>
						</div>
						<div
							data-aos="flip-up"
							data-aos-delay="200"
							className="calculate__calculates_col1_slider1"
						>
							<h4 className="calculate__calculates_col1_slider1-title">
								{t("home.calculate.calcTitle3")}
							</h4>
							<Row className="row">
								<Col className="row__col" span={12}>
									<Slider
										className="row__col_slider"
										min={13}
										max={48}
										onChange={onChange3}
										value={typeof inputValue3 === "number" ? inputValue3 : 0}
									/>
								</Col>
								<div className="calculate__calculates_col1_slider1_inp inp3">
									<Col
										span={4}
										className="calculate__calculates_col1_slider1_inp-col"
									>
										<InputNumber
											className="calculate__calculates_col1_slider1_inp-col-input"
											min={13}
											max={48}
											style={{ margin: "0 16px" }}
											value={inputValue3}
											onChange={onChange3}
										/>
										<p className="inp3_mec">{t("month")}</p>
									</Col>
								</div>
							</Row>
							<p className="calculate__calculates_col1_slider1-priceStart">
								13{t("month")}
							</p>
							<p className="calculate__calculates_col1_slider1-priceEnd">
								48 {t("month")}
							</p>
						</div>
						<p
							data-aos="flip-up"
							data-aos-delay="300"
							className="calculate__calculates_col1-text"
						>
							{t("home.calculate.text")}
						</p>
					</div>
					<motion.div
						className="calculate__calculates_col2"
						initial={{
							transform: "rotate(30deg)",
							transformOrigin: " right bottom",
						}}
						whileInView={{
							transform: "rotate(0deg)",
							transformOrigin: " right bottom",
						}}
						transition={{ transition, duration: 1 }}
					>
						<div
							data-aos="fade-left"
							data-aos-delay="100"
							className="calculate__calculates_col2-titles"
						>
							<h2>
								{t("home.calculate.resultTitle1")}
								<br />
								<span>{inputValue} cuм</span>
								{/* <input
									type="text"
									value={`${inputValue} ${t("sum")}`}
									onChange={onChange}
								/> */}
							</h2>
						</div>
						<div
							data-aos="fade-right"
							data-aos-delay="200"
							className="calculate__calculates_col2-titles titles2"
						>
							<h2>
								{t("home.calculate.resultTitle2")}
								<br />
								<span>{inputValue2} cuм</span>
								{/* <input
									type="text"
									value={`${inputValue2} ${t("sum")}`}
									onChange={onChange2}
								/> */}
							</h2>
						</div>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Calculate;

// import React, { useState } from "react";
// import { Col, InputNumber, Row, Slider } from "antd";

// const IntegerStep = () => {
// 	const [inputValue, setInputValue] = useState(1);
// 	const onChange = (newValue) => {
// 		setInputValue(newValue);
// 	};
// 	return (
// 		<Row>
// 			<Col span={12}>
// 				<Slider
// 					min={1}
// 					max={2120}
// 					onChange={onChange}
// 					value={typeof inputValue === "number" ? inputValue : 0}
// 				/>
// 			</Col>
// 			<Col span={4}>
// 				<InputNumber
// 					min={1}
// 					max={2120}
// 					style={{ margin: "0 16px" }}
// 					value={inputValue}
// 					onChange={onChange}
// 				/>
// 			</Col>
// 		</Row>
// 	);
// };
// export default IntegerStep;
// const DecimalStep = () => {
// 	const [inputValue, setInputValue] = useState(0);

// 	const onChange = (value) => {
// 		if (isNaN(value)) {
// 			return;
// 		}
// 		setInputValue(value);
// 	};

// 	return (
// 		<Row>
// 			<Col span={12}>
// 				<Slider
// 					min={0}
// 					max={1}
// 					onChange={onChange}
// 					value={typeof inputValue === "number" ? inputValue : 0}
// 					step={0.01}
// 				/>
// 			</Col>
// 			<Col span={4}>
// 				<InputNumber
// 					min={0}
// 					max={1}
// 					style={{ margin: "0 16px" }}
// 					step={0.01}
// 					value={inputValue}
// 					onChange={onChange}
// 				/>
// 			</Col>
// 		</Row>
// 	);
// };

// const App = () => (
// <Space style={{ width: "100%" }} direction="vertical">
// 	<IntegerStep />
// 	<DecimalStep />
// </Space>
// );

// export default App;
