import React, { useState } from "react";
import Button from "../button/button";
import "./submit.scss";
import { useTranslation } from "react-i18next";
import { message } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Submit = ({ onClose, success }) => {
	const { t } = useTranslation();
	const [agree, setAgree] = useState(false);
	const [messageApi, contextHolder] = message.useMessage();

	const errorAlert = () => {
		messageApi.open({
			type: "error",
			content: "Barcha qiymatlarni kiriting",
		});
	};

	success = () =>
		toast.success(t("modal.submitSucces"), {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	const [openModal, setOpenModal] = useState(false);
	const [data, setData] = useState({
		phone: "",
		price: "",
		product: "",
		comment: "",
	});
	function handle(e) {
		const newData = { ...data };
		newData[e.target.id] = e.target.value;
		setData(newData);
		console.log(newData);
	}

	const isValid = () => {
		return Boolean(data.comment && data.phone && data.price && data.product);
	};
	const submit = async (e) => {
		e.preventDefault();
		if (isValid() && agree) {
			setData({
				phone: "",
				price: "",
				product: "",
				comment: "",
			});
			setOpenModal(false);
			onClose(openModal);
			success();
		} else {
			errorAlert();
		}
	};
	return (
		<>
			{contextHolder}
			<div className="submit">
				<h2>{t("modal.submitTitle")}</h2>
				<p>{t("modal.submitDescription")}</p>
				<form action="" className="form" onSubmit={(e) => submit(e)}>
					<input
						className="input-tell form-control"
						onChange={(e) => handle(e)}
						id="phone"
						value={data.phone}
						type="text"
						placeholder={t("modal.submitPhone")}
						required
					/>
					{/* {console.log("data phone ----> ", data.phone)} */}
					<input
						className="input-price form-control"
						onChange={(e) => handle(e)}
						id="price"
						value={data.price}
						type="text"
						placeholder={t("modal.submitPrice")}
						required
					/>
					<input
						className="input-name form-control"
						onChange={(e) => handle(e)}
						id="product"
						value={data.product}
						type="text"
						placeholder={t("modal.submitProduct")}
						required
					/>
					<input
						className="input-name form-control"
						onChange={(e) => handle(e)}
						id="comment"
						value={data.comment}
						name=""
						cols="50"
						rows="1"
						placeholder={t("modal.submitComments")}
						required
					/>
					<label htmlFor="check">
						<input
							value={agree}
							onChange={() => {
								console.log("check>>");
								setAgree((prev) => !prev);
							}}
							type="checkbox"
							placeholder="bla bla"
							id="check"
							required
						/>
						{t("modal.modalAgree")}
						<a className="link" href="#" target="_blank">
							{t("modal.modalAgreeLink")}
						</a>
					</label>
					<span>
						
						<span onClick={submit}>
							<Button btnTitle={t("submitTitle")} />
						</span>
					</span>
				</form>
			</div>
		</>
	);
};
export default Submit;
