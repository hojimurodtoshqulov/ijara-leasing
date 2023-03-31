import "./button.scss";
import { Link } from "react-router-dom";
export default function Button({ btnTitle, btnLink, btnStyle }) {
	return (
		<button
			className={btnStyle === "emptyBtn" ? "empty " : "button"}
			type="submit"
		>
			<Link to={btnLink}>{btnTitle}</Link>
			<div className="button__lightLeft"></div>
			<div className="button__lightRight"></div>
		</button>
	);
}
