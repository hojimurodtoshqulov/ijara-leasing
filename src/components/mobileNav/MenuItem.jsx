import * as React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 },
		},
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 },
		},
	},
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ title, href, toggleOpen }) => {
	// const style = { border: `2px solid ${colors[i]}` };
	const scrollToTop = () => {
		window.scrollTo(0, 0);
	};
	return (
		<motion.li
			variants={variants}
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.95 }}
			onClick={scrollToTop}
		>
			<NavLink
				onClick={() => {
					toggleOpen();
				}}
				to={`/${href}`}
			>
				{title}
			</NavLink>
		</motion.li>
	);
};
