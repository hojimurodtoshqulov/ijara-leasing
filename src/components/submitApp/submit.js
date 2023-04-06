import React, { useState } from "react";
import Button from "../button/button";
import "./submit.scss";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Submit = ({ onClose, success }) => {
	const { t } = useTranslation();
	success = () =>
		toast.success(t("submitSuccess"), {
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
	const submit = async (e) => {
		e.preventDefault();
		// await axios
		// 	.post(url, {
		// 		phone: data.phone,
		// 		price: data.price,
		// 		product: data.product,
		// 		comment: data.comment,
		// 	})
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	});
		setData({
			phone: "",
			price: "",
			product: "",
			comment: "",
		});
		setOpenModal(false);
		onClose(openModal);
	};
	return (
		<>
			<div className="submit">
				<h2>{t("submitTitle")}</h2>
				<p>{t("submitDescription")}</p>
				<form action="" className="form" onSubmit={(e) => submit(e)}>
					<input
						className="input-tell form-control"
						onChange={(e) => handle(e)}
						id="phone"
						value={data.phone}
						type="text"
						placeholder={t("submitPhone")}
						required
					/>
					{/* {console.log("data phone ----> ", data.phone)} */}
					<input
						className="input-price form-control"
						onChange={(e) => handle(e)}
						id="price"
						value={data.price}
						type="text"
						placeholder={t("submitPrice")}
						required
					/>
					<input
						className="input-name form-control"
						onChange={(e) => handle(e)}
						id="product"
						value={data.product}
						type="text"
						placeholder={t("submitProduct")}
						required
					/>
					<textarea
						onChange={(e) => handle(e)}
						id="comment"
						value={data.comment}
						name=""
						cols="50"
						rows="1"
						placeholder={t("submitComments")}
					></textarea>
					<span
						onClick={
							(data.phone && data.price && data.product) ||
							(data.phone && data.price && data.product && data.comment) !== ""
								? success
								: null
						}
					>
						<Button btnTitle={t("submitTitle")} />
					</span>
				</form>
			</div>
		</>
	);
};
export default Submit;
