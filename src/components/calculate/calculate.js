import scss from "./calculate.scss";
import {Col, InputNumber, Row, Slider} from "antd";
import {useState} from "react";
import {motion} from "framer-motion";
import {useTranslation} from "react-i18next";

const Calculate = () => {
    const {t} = useTranslation();

    const [leasingValue, setLeasingValue] = useState(2000000);
    const [paymentValue, setPaymentValue] = useState(1000000);
    const [timeValue, setTimeValue] = useState(13);
    const [sum, setSum] = useState(1472500);
    const [sum2, setSum2] = useState(54537);
    // const onChangeSum = (newValue) => {
    // 	newValue = sum + 10;
    // 	setSum(newValue);
    // };

    const paymentValueChange = (e) => {
        const value = Number(e.target.value)
        if (value > leasingValue) {
            setPaymentValue(leasingValue)
        } else {
            setPaymentValue(value)
        }
    }

    const leasingValueChange = (e) => {
        const value = Number(e.target.value)
        if (value <= paymentValue) {
            setPaymentValue(value)
        }
        setLeasingValue(value)
    }

    const numberForamtter = (num) => {
        // const newFormatter = new Intl.numberFormat("en-US", {separator: " "});
        return (new Intl.NumberFormat("en-US").format(num));
    }


    const transition = {type: "spring", duration: 2};

    return (
        <div className="calculate">
            <div className="container">
                <div className="calculate__titles" data-aos="fade-up">
                    <h1>{t("home.calculate.title")}</h1>
                    {/*<motion.div*/}
                    {/*    initial={{width: "0%"}}*/}
                    {/*    whileInView={{width: "45%"}}*/}
                    {/*    transition={{transition}}*/}
                    {/*></motion.div>*/}
                    <p>{t("home.calculate.subtitle")}</p>
                </div>
                <div className="calculate__calculates">
                    <div className="calculate__calculates_col1">
                        <h1>
                            <p>{t("home.calculate.calculator")}</p>{" "}
                            <motion.span
                                initial={{width: "0%"}}
                                whileInView={{width: "30%"}}
                                transition={{transition}}
                            ></motion.span>
                            {" "}
                            <motion.div
                                initial={{width: "0%"}}
                                whileInView={{width: "65%"}}
                                transition={{transition}}
                            ></motion.div>
                        </h1>
                        <div className={"calculate__range-wrap"}>
                            <div className={"calculate__range"}>
                                <label className={"calculate__range-label"}>
                                    <h4 className={"calculate__range-label-text"}>{t("home.calculate.calcTitle1")}</h4>
                                    <h3 className={"calculate__range-label-amount"}>{numberForamtter(leasingValue)} {t("sum")}</h3>
                                </label>
                                <input type={'range'} min={2000000}
                                       onChange={leasingValueChange}
                                       value={leasingValue} max={100000000} style={{width: "100%"}}/>
                                <div className={'calculate__range-values'}>
                                    <h3> 2 000 000 {t("sum")}</h3>
                                    <h3> 100 000 000 {t("sum")}</h3>
                                </div>
                            </div>
                            <div className={"calculate__range"}>
                                <label className={"calculate__range-label"}>
                                    <h4 className={"calculate__range-label-text"}>{t("home.calculate.calcTitle2")}</h4>
                                    <h3 className={"calculate__range-label-amount"}>{numberForamtter(paymentValue)} {t("sum")}</h3>
                                </label>
                                <div className={'input-wrapper'}><input onChange={paymentValueChange} value={paymentValue} type={'range'}
                                            max={50000000}
                                            min={1000000}
                                            style={{width: "100%"}}/></div>

                                <div className={'calculate__range-values'}>
                                    <h3>1 000 000 {t("sum")}</h3>
                                    <h3>50 000 000 {t("sum")}</h3>
                                </div>
                            </div>
                            <div className={"calculate__range"}>
                                <label className={"calculate__range-label"}>
                                    <h4 className={"calculate__range-label-text"}>{t("home.calculate.calcTitle3")}</h4>
                                    <h3 className={"calculate__range-label-amount"}>{timeValue} {t("month")}</h3>
                                </label>
                                <input min={13} value={timeValue} max={48} style={{width: "100%"}}
                                       onChange={(e) => setTimeValue(+e.target.value)} type="range"/>
                                <div className={'calculate__range-values'}>
                                    <h3>13 {t("month")}</h3>
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
                        transition={{transition, duration: 1}}
                    >
                        <div
                            data-aos="fade-left"
                            data-aos-delay="100"
                            className="calculate__calculates_col2-titles"
                        >
                            <h2>
                                {t("home.calculate.resultTitle1")}
                                <br/>
                                <span>{leasingValue} {t("sum")}</span>
                                {/* <input
									type="text"
									value={`${leasingValue} ${t("sum")}`}
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
                                <br/>
                                <span>{paymentValue} {t("sum")}</span>
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
    );
};

export default Calculate;

// import React, { useState } from "react";
// import { Col, InputNumber, Row, Slider } from "antd";

// const IntegerStep = () => {
// 	const [leasingValue, setLeasingValue] = useState(1);
// 	const onChange = (newValue) => {
// 		setLeasingValue(newValue);
// 	};
// 	return (
// 		<Row>
// 			<Col span={12}>
// 				<Slider
// 					min={1}
// 					max={2120}
// 					onChange={onChange}
// 					value={typeof leasingValue === "number" ? leasingValue : 0}
// 				/>
// 			</Col>
// 			<Col span={4}>
// 				<InputNumber
// 					min={1}
// 					max={2120}
// 					style={{ margin: "0 16px" }}
// 					value={leasingValue}
// 					onChange={onChange}
// 				/>
// 			</Col>
// 		</Row>
// 	);
// };
// export default IntegerStep;
// const DecimalStep = () => {
// 	const [leasingValue, setLeasingValue] = useState(0);

// 	const onChange = (value) => {
// 		if (isNaN(value)) {
// 			return;
// 		}
// 		setLeasingValue(value);
// 	};

// 	return (
// 		<Row>
// 			<Col span={12}>
// 				<Slider
// 					min={0}
// 					max={1}
// 					onChange={onChange}
// 					value={typeof leasingValue === "number" ? leasingValue : 0}
// 					step={0.01}
// 				/>
// 			</Col>
// 			<Col span={4}>
// 				<InputNumber
// 					min={0}
// 					max={1}
// 					style={{ margin: "0 16px" }}
// 					step={0.01}
// 					value={leasingValue}
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
