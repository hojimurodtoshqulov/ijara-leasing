import React from "react";
import Submit from "../submitApp/submit";
import "./modal.scss";
import { useState } from "react";
import LeasingService from "../leasingImages/leasingService";
const Modal = ({ open, onClose, theme }) => {
	const [openModal, setOpenModal] = useState(true);
	if (!open) return null;
	return (
		<div className="overlay">
			<div className="modalContainer">
				{/* <Submit onClose={onClose} /> */}

				{theme === "submit" ? <Submit onClose={onClose} /> : <LeasingService />}
			</div>
			<div onClick={onClose} className="modalBg"></div>
		</div>
	);
};
export default Modal;
