import React from "react";
import Submit from "../submitApp/submit";
import "./modal.scss";
import { useState } from "react";
import LeasingService from "../leasingImages/leasingService";
import { VscChromeClose } from "react-icons/vsc";

const Modal = ({ open, onClose, theme }) => {
	const [openModal, setOpenModal] = useState(true);
	console.log(open);
	//   if (!open) return null;
	const log = () => {
		console.log("bla");
	};
	return (
		<div className={"overlay " + (open ? "active" : "")}>
			<div className={`modalContainer `}>
				{/* <Submit onClose={onClose} /> */}

				{theme === "submit" ? (
					<Submit onClose={onClose} />
				) : (
					<LeasingService theme={theme} />
				)}
				<p onClick={onClose} className="close">
					<VscChromeClose />
				</p>
			</div>
			<div onClick={onClose} className="modalBg"></div>
		</div>
	);
};
export default Modal;
