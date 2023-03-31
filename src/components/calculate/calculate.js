import scss from "./calculate.scss";
import { Col, InputNumber, Row, Slider } from "antd";
import { useState } from "react";
const Calculate = () => {
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

	return (
		<div className="calculate">
			<div className="container">
				<div className="calculate__titles">
					<h1>Рассчитайте стоимость лизинга</h1>
					<div></div>
					<p>
						Укажите стоимость выбранного автомобиля, желаемый первоначальный
						взнос и срок лизинга. Свяжитесь с нами после предварительного
						расчета, чтобы рассказать о выбранном автомобиле и начать оформление
						сделки.
					</p>
				</div>
				<div className="calculate__calculates">
					<div className="calculate__calculates_col1">
						<h1>
							КАЛЬКУЛЯТОР ЛИЗИНГА <span></span> <p></p>
						</h1>
						<div className="calculate__calculates_col1_slider1">
							<h4 className="calculate__calculates_col1_slider1-title">
								Стоимость покупки
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
										<p>сум</p>
									</Col>
								</div>
							</Row>
							<p className="calculate__calculates_col1_slider1-priceStart">
								2 000 000 сум
							</p>
							<p className="calculate__calculates_col1_slider1-priceEnd">
								100 000 000 сум
							</p>
						</div>
						<div className="calculate__calculates_col1_slider1">
							<h4 className="calculate__calculates_col1_slider1-title">
								Первоначальный взнос
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
										<p>сум</p>
									</Col>
								</div>
							</Row>
							<p className="calculate__calculates_col1_slider1-priceStart">
								1 000 000 сум
							</p>
							<p className="calculate__calculates_col1_slider1-priceEnd">
								50 000 000 сум
							</p>
						</div>
						<div className="calculate__calculates_col1_slider1">
							<h4 className="calculate__calculates_col1_slider1-title">
								Срок лизинга
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
										<p className="inp3_mec">мес</p>
									</Col>
								</div>
							</Row>
							<p className="calculate__calculates_col1_slider1-priceStart">
								13 мес
							</p>
							<p className="calculate__calculates_col1_slider1-priceEnd">
								48 мес
							</p>
						</div>
						<p className="calculate__calculates_col1-text">
							Приведенные расчеты через калькулятор являются предварительными и
							не является офертой.
						</p>
					</div>
					<div className="calculate__calculates_col2">
						<div className="calculate__calculates_col2-titles">
							<h2>
								Сумма лизинга
								<br />
								<input
									type="text"
									value={`${inputValue} сум`}
									onChange={onChange}
								/>
							</h2>
						</div>
						<div className="calculate__calculates_col2-titles titles2">
							<h2>
								Ежемесячный платеж
								<br />
								<input
									type="text"
									value={`${inputValue2} сум`}
									onChange={onChange2}
								/>
							</h2>
						</div>
					</div>
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
