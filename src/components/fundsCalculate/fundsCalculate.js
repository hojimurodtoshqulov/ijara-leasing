import "./fundsCalculate.scss";
import { Col, InputNumber, Row, Slider } from "antd";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VanillaTilt from "vanilla-tilt";

const FundsCalculate = () => {
	const { t } = useTranslation();
	const [leasingValue, setLeasingValue] = useState(10000000);
	// const [paymentValue, setPaymentValue] = useState(3000000);
	const [timeValue, setTimeValue] = useState(12);
	const [timeValue2, setTimeValue2] = useState(18);
	const [sumValue, setsumValue] = useState(0);
	const [sumValue2, setsumValue2] = useState(0);
	const [numValue, setNumValue] = useState(0);
	const [numValue2, setNumValue2] = useState(0);

	// const paymentValueChange = (e) => {
	// 	const value = Number(e.target.value);
	// 	if (value > leasingValue) {
	// 		setPaymentValue(leasingValue);
	// 	} else {
	// 		setPaymentValue(onStepChange(e, 1000000));
	// 	}
	// };
	const leasingValueChange = (e) => {
		const value = Number(e.target.value);
		// if (value <= paymentValue) {
		// 	setPaymentValue(value);
		// }
		setLeasingValue(onStepChange(e, 1000000));
	};
	useEffect(() => {
		if (timeValue > 0) {
			// const sum = leasingValue - paymentValue;
			const sumFoiz = timeValue * (18 / 12);
			const mainSum = leasingValue + (leasingValue / 100) * 24;
			console.log("umumiy summa >>>", mainSum);
			const oylikFoyda = mainSum / 12;
			setsumValue(Math.ceil(oylikFoyda));
			setNumValue(Math.ceil(mainSum));
		}
		if (timeValue2 > 12) {
			const sum = leasingValue;
			const sumFoiz = timeValue2 * (23 / 12);
			console.log("katta", sumFoiz);
			const mainSum = leasingValue + (leasingValue / 100) * sumFoiz;
			const oylikFoyda = mainSum / timeValue2;

			// const brnarsa = (sum / 100) * sumFoiz;
			// const kattaFoyda = brnarsa + sum;
			// const sasa = kattaFoyda / timeValue;
			setsumValue2(Math.ceil(oylikFoyda));
			setNumValue2(Math.ceil(mainSum));

			// console.log("katta", sasa);
		}
	}, [leasingValue, timeValue, timeValue2]);
	const numberForamtter = (num) => {
		// const newFormatter = new Intl.numberFormat("en-US", {separator: " "});
		return new Intl.NumberFormat("en-En").format(num);
	};
	const russianNumFormat = (num) => {
		return new Intl.NumberFormat("ru-Ru").format(num);
	};
	const transition = { type: "spring", duration: 2 };
	const Tilt = (props) => {
		const { options, ...rest } = props;
		const tilt = useRef(null);

		useEffect(() => {
			VanillaTilt.init(tilt.current, options);
		}, [options]);

		return <div ref={tilt} {...rest} />;
	};
	const options = {
		scale: 1.05,
		speed: 1000,
		max: 20,
	};
	const [selected, setSelected] = useState(0);
	const titles = [
		<>{t("home.q&a.slider1.title")}</>,
		<>{t("home.q&a.slider2.title")}</>,
	];
	const formatInputValue = (inputVal) => {
		return `${numberForamtter(inputVal)}`;
	};
	const labelInputChange = (e, setState, maxVal) => {
		const inputVal = e.target.value;
		const newValue = parseInt(inputVal.replace(/(,)/g, ""));

		// if (newValue >= maxVal || !newValue) return;
		if (!newValue) return setState(0);
		setState(newValue);
	};

	const onStepChange = (event, step) => {
		const newValue = parseInt(event.target.value, 10);

		const remainder = newValue % step;
		const newValueRounded =
			remainder >= step / 2
				? newValue + (step - remainder)
				: newValue - remainder;

		return newValueRounded;
	};

	// const monthOnchange = (e) => {
	// 	const inputVal = e.target.value;
	// 	const maxVal = 48;
	// 	const newValue = parseInt(inputVal.replace(/(,)/g, ""));
	// 	console.log(newValue,);
	// 	if (newValue >= maxVal || !newValue) return;
	// 	setTimeValue((prev) => prev + 3);
	// };
	return (
		<div className="fundsCalculate">
			<div className="">
				{/* <div className="fundsCalculate__titles" data-aos="fade-up">
					<h1>
						<p>Funds Calculate</p>
					</h1>
					<p>{t("home.calculate.subtitle")}</p>
				</div> */}
				<div className="fundsCalculate__calculates">
					<div className="fundsCalculate__calculates_col1">
						<h1>
							<motion.p>
								{t("home.calculate.calculator")}
								{/* <motion.span
									key={selected}
									initial={{ opacity: 0, x: 100 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -100 }}
									transition={{ ...transition, duration: 2 }}
								>
									{titles[selected]}
								</motion.span> */}
							</motion.p>
							<motion.span
								initial={{ width: "0%" }}
								whileInView={{ width: "30%" }}
								transition={{ transition }}
							></motion.span>
							<motion.div
								initial={{ width: "0%" }}
								whileInView={{ width: "65%" }}
								transition={{ transition }}
							></motion.div>
						</h1>
						<div className={"fundsCalculate__range-wrap"}>
							<div className={"fundsCalculate__range"}>
								<label className={"fundsCalculate__range-label"}>
									<h4 className={"fundsCalculate__range-label-text"}>
										{t("home.calculate.calcTitle1")}
									</h4>
									<h3 className={"fundsCalculate__range-label-amount"}>
										<input
											type="text"
											onChange={(e) => {
												labelInputChange(e, setLeasingValue, 1000000000);
											}}
											value={formatInputValue(leasingValue)}
										/>
										{t("sum")}
										{/* {numberForamtter(leasingValue)} {t("sum")} */}
									</h3>
								</label>
								{/* Sotib olish qiymati */}
								<input
									type={"range"}
									min={10000000}
									onChange={leasingValueChange}
									value={leasingValue}
									max={1000000000}
									style={{ width: "100%" }}
								/>
								<div className={"fundsCalculate__range-values"}>
									<h3> 10 000 000 {t("sum")}</h3>
									<h3> 1000 000 000 {t("sum")}</h3>
								</div>
							</div>
							{/* <div className={"fundsCalculate__range"}>
								<label className={"fundsCalculate__range-label"}>
									<h4 className={"fundsCalculate__range-label-text"}>
										{t("home.calculate.calcTitle2")}
									</h4>
									<h3 className={"fundsCalculate__range-label-amount"}>
										<input
											type="text"
											onChange={(e) => {
												labelInputChange(e, setPaymentValue, 500000000);
											}}
											value={formatInputValue(paymentValue)}
										/>
										{t("sum")}
									</h3>
								</label>
								<div className={"input-wrapper"}>
									<input
										onChange={paymentValueChange}
										value={paymentValue}
										type={"range"}
										max={500000000}
										min={3000000}
										style={{ width: "100%" }}
									/>
								</div>
								<div className={"fundsCalculate__range-values"}>
									<h3>3 000 000 {t("sum")}</h3>
									<h3>500 000 000 {t("sum")}</h3>
								</div>
							</div> */}
							<div className={"fundsCalculate__range"}>
								<label className={"fundsCalculate__range-label"}>
									<h4 className={"fundsCalculate__range-label-text"}>
										{t("home.calculate.calcTitle3")}
									</h4>
									<h3 className={"fundsCalculate__range-label-amount"}>
										<input
											type="text"
											onChange={(e) => {
												labelInputChange(e, setTimeValue, 12);
											}}
											value={timeValue}
										/>
										{t("month")}
									</h3>
								</label>

								<input
									min={1}
									value={timeValue}
									max={12}
									// step={3}
									style={{ width: "100%" }}
									// onChange={(e) => setTimeValue((prev) => prev + 3)}
									onChange={(event) => {
										setTimeValue(onStepChange(event, 1));
									}}
									type="range"
								/>
								<div className={"fundsCalculate__range-values"}>
									<h3>1 {t("month")}</h3>
									<h3>12 {t("month")}</h3>
								</div>
							</div>
							<div className={"fundsCalculate__range"}>
								<label className={"fundsCalculate__range-label"}>
									<h4 className={"fundsCalculate__range-label-text"}>
										{t("home.calculate.calcTitle3")}
									</h4>
									<h3 className={"fundsCalculate__range-label-amount"}>
										<input
											type="text"
											onChange={(e) => {
												labelInputChange(e, setTimeValue2, 18);
											}}
											value={timeValue2}
										/>
										{t("month")}
									</h3>
								</label>

								<input
									min={12}
									value={timeValue2}
									max={18}
									// step={3}
									style={{ width: "100%" }}
									// onChange={(e) => setTimeValue((prev) => prev + 3)}
									onChange={(event) => {
										setTimeValue2(onStepChange(event, 1));
									}}
									type="range"
								/>
								<div className={"fundsCalculate__range-values"}>
									<h3>12 {t("month")}</h3>
									<h3>18 {t("month")}</h3>
								</div>
							</div>
						</div>
						{/* <p
							data-aos="flip-up"
							data-aos-delay="300"
							className="fundsCalculate__calculates_col1-text"
						>
							{t("home.calculate.text")}
						</p> */}
					</div>
					<div options={options} className="fundsCalculate__calculates_col2">
						<div
							data-aos="fade-left"
							className="fundsCalculate__calculates_col2_div1"
						></div>
						<div
							data-aos="fade-right"
							className="fundsCalculate__calculates_col2_div2"
						></div>
						<motion.div
							className="fundsCalculate__calculates_col2-main "
							initial={{
								transform: "rotate(30deg)",
								transformOrigin: " right bottom",
								clipPath: " polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
							}}
							whileInView={{
								transform: "rotate(0deg)",
								transformOrigin: " right bottom",
								clipPath: "polygon(100% 0, 100% 100%, 0 100%, 0 0)",
							}}
							transition={{ transition, duration: 1 }}
						>
							<div
								data-aos="fade-left"
								data-aos-delay="100"
								className="fundsCalculate__calculates_col2-titles"
							>
								<h2>
									{/* {t("home.calculate.resultTitle1")} */}
									Общая сумма за 12 месяцев
									<br />
									<span>
										{russianNumFormat(numValue)} {t("sum")}
									</span>
								</h2>
							</div>
							<div
								data-aos="fade-right"
								data-aos-delay="200"
								className="fundsCalculate__calculates_col2-titles titles2"
							>
								<h2>
									{t("home.calculate.resultTitle2")}

									<br />
									<span>
										{russianNumFormat(sumValue)} {t("sum")}
									</span>
								</h2>
							</div>
							<div
								data-aos="fade-left"
								data-aos-delay="100"
								className="fundsCalculate__calculates_col2-titles"
							>
								<h2>
									{/* {t("home.calculate.resultTitle1")} */}
									Общая сумма за 18 месяцев
									<br />
									<span>
										{russianNumFormat(numValue2)} {t("sum")}
									</span>
								</h2>
							</div>
							<div
								data-aos="fade-right"
								data-aos-delay="200"
								className="fundsCalculate__calculates_col2-titles titles2"
							>
								<h2>
									{t("home.calculate.resultTitle2")}
									<br />
									<span>
										{russianNumFormat(sumValue2)} {t("sum")}
									</span>
								</h2>
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FundsCalculate;
