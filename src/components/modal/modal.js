import React from "react";
import Submit from "../submitApp/submit";
import "./modal.scss";
import {useState} from "react";
const Modal = ({ open, onClose}) => {
const [openModal, setOpenModal] = useState(true)
	if (!open) return null;
	return (
		<div className="overlay">
			<div className="modalContainer">
				<Submit onClose={onClose}/>
			</div>
			<div onClick={onClose} className="modalBg"></div>
		</div>
	);
};
export default Modal;
