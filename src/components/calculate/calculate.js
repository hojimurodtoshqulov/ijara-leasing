import scss from "./calculate.scss";
import { Col, InputNumber, Row, Slider } from "antd";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import VanillaTilt from "vanilla-tilt";
const Calculate = () => {
	const { t } = useTranslation();
	const [leasingValue, setLeasingValue] = useState(10000000);
	const [paymentValue, setPaymentValue] = useState(3000000);
	const [timeValue, setTimeValue] = useState(18);
	const [sumValue, setsumValue] = useState(0);
	const [numValue, setNumValue] = useState(0);
	const paymentValueChange = (e) => {
		const value = Number(e.target.value);
		if (value > leasingValue) {
			setPaymentValue(leasingValue);
		} else {
			setPaymentValue(value);
		}
	};
	const leasingValueChange = (e) => {
		const value = Number(e.target.value);
		if (value <= paymentValue) {
			setPaymentValue(value);
		}
		setLeasingValue(value);
	};
	useEffect(() => {
		if (timeValue < 24) {
			const sum = leasingValue - paymentValue;
			const sumFoiz = timeValue * (18 / 12);
			const brnarsa = (sum / 100) * sumFoiz;
			const sasa = brnarsa / timeValue;
			setsumValue(Math.ceil(sasa));
		} else if (timeValue >= 24) {
			const sum = leasingValue - paymentValue;
			const sumFoiz = timeValue * (17 / 12);
			const brnarsa = (sum / 100) * sumFoiz;
			const sasa = brnarsa / timeValue;
			setsumValue(Math.ceil(sasa));
			console.log("timeValue", timeValue);
		}
	}, [leasingValue, paymentValue, timeValue]);
	const numberForamtter = (num) => {
		// const newFormatter = new Intl.numberFormat("en-US", {separator: " "});
		return new Intl.NumberFormat("en-US").format(num);
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
		if (newValue >= maxVal || !newValue) return;
		setState(newValue);
	};
	return (
		<div className="calculate">
			<div className="container">
				<div className="calculate__titles" data-aos="fade-up">
					<h1>
						<p>{t("home.calculate.title")}</p>
					</h1>
					<p>{t("home.calculate.subtitle")}</p>
				</div>
				<div className="calculate__calculates">
					<div className="calculate__calculates_col1">
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
            <div className={"calculate__range-wrap"}>
              <div className={"calculate__range"}>
                <label className={"calculate__range-label"}>
                  <h4 className={"calculate__range-label-text"}>
                    {t("home.calculate.calcTitle1")}
                  </h4>
                  <h3 className={"calculate__range-label-amount"}>
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
                <div className={"calculate__range-values"}>
                  <h3> 10 000 000 {t("sum")}</h3>
                  <h3> 1000 000 000 {t("sum")}</h3>
                </div>
              </div>
              <div className={"calculate__range"}>
                <label className={"calculate__range-label"}>
                  <h4 className={"calculate__range-label-text"}>
                    {t("home.calculate.calcTitle2")}
                  </h4>
                  <h3 className={"calculate__range-label-amount"}>
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
                  {/* Dastlabki to'lov */}
                  <input
                    onChange={paymentValueChange}
                    value={paymentValue}
                    type={"range"}
                    max={500000000}
                    min={3000000}
                    style={{ width: "100%" }}
                  />
                </div>

                <div className={"calculate__range-values"}>
                  <h3>3 000 000 {t("sum")}</h3>
                  <h3>500 000 000 {t("sum")}</h3>
                </div>
              </div>
              <div className={"calculate__range"}>
                <label className={"calculate__range-label"}>
                  <h4 className={"calculate__range-label-text"}>
                    {t("home.calculate.calcTitle3")}
                  </h4>
                  <h3 className={"calculate__range-label-amount"}>
                    <input
                      type="text"
                      onChange={(e) => {
                        labelInputChange(e, setTimeValue, 48);
                      }}
                      value={timeValue}
                    />
                    {t("month")}
                  </h3>
                </label>

								<input
									min={18}
									value={timeValue}
									max={48}
									// step={3}
									style={{ width: "100%" }}
									onChange={(e) => setTimeValue(+e.target.value)}
									type="range"
								/>
								<div className={"calculate__range-values"}>
									<h3>18 {t("month")}</h3>
									<h3>48 {t("month")}</h3>
								</div>
							</div>
						</div>
						<p
							data-aos="flip-up"
							data-aos-delay="300"
							className="calculate__calculates_col1-text"
						>
							{t("home.calculate.text")}
						</p>
					</div>
					<div options={options} className="calculate__calculates_col2">
						<div
							data-aos="fade-left"
							className="calculate__calculates_col2_div1"
						></div>
						<div
							data-aos="fade-right"
							className="calculate__calculates_col2_div2"
						></div>
						<motion.div
							className="calculate__calculates_col2-main "
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
								className="calculate__calculates_col2-titles"
							>
								<h2>
									{t("home.calculate.resultTitle1")}
									<br />
									<span>
										{leasingValue} {t("sum")}
									</span>
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
									<span>
										{sumValue} {t("sum")}
									</span>
									{/* <input
									type="text"
									value={`${paymentValue} ${t("sum")}`}
									onChange={onChange2}
								/> */}
                </h2>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
