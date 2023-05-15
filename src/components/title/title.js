import styles from "./title.module.scss";
// import Typed from "react-typed";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

import { useAnimation, motion } from "framer-motion";

const Title = ({
	underline = true,
	border = true,
	small,
	title,
	typed,
	...props
}) => {
	const ctrls = useAnimation();

	const [mainTitle, setMainTitle] = useState(title);

	useEffect(() => {
		setMainTitle(title);
	}, [title]);

	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start("visible");
		}
		if (!inView) {
			ctrls.start("hidden");
		}
	}, [ctrls, inView]);

	const wordAnimation = {
		hidden: {},
		visible: {},
	};

	const characterAnimation = {
		hidden: {
			opacity: 0,
			y: `0.25em`,
		},
		visible: {
			opacity: 1,
			y: `0em`,
			transition: {
				duration: 1,
				ease: [0.2, 0.65, 0.3, 0.9],
			},
		},
	};
	return (
		<motion.h1
			className={`${styles.title}
    ${small && styles.small}`}
			data-aos="fade-up"
			{...props}
		>
			{border && (
				<span
					data-aos="fade-right"
					data-aos-easing="ease-in-sine"
					className={styles.titleBorder}
				></span>
			)}
			{underline && (
				<span
					data-aos="zoom-in"
					data-aos-offset="300"
					data-aos-easing="ease-in-sine"
					className={styles.titleUnderline}
				></span>
			)}
			{title}
		</motion.h1>

		// <h2
		//   aria-label={mainTitle}
		//   // role="heading"
		//   className={`${styles.title} ${underline && styles.underline}
		//  ${small && styles.small} ${border && styles.border}`}
		// >
		//   {mainTitle.split(" ").map((word, index) => {
		//     return (
		//       <motion.span
		//         ref={ref}
		//         aria-hidden="true"
		//         key={index}
		//         initial="hidden"
		//         animate={ctrls}
		//         variants={wordAnimation}
		//         transition={{
		//           delayChildren: index * 0.25,
		//           staggerChildren: 0.05,
		//         }}
		//         style={{
		//           display: "inline-block",
		//           marginRight: "0.25em",
		//           whiteSpace: "nowrap",
		//         }}
		//       >
		//         {word.split("").map((character, index) => {
		//           return (
		//             <motion.span
		//               style={{
		//                 display: "inline-block",
		//                 marginRight: "0.25em",
		//                 whiteSpace: "nowrap",
		//               }}
		//               aria-hidden="true"
		//               key={index}
		//               variants={characterAnimation}
		//             >
		//               {character}
		//             </motion.span>
		//           );
		//         })}
		//       </motion.span>
		//     );
		//   })}
		// </h2>
	);
};

export default Title;

/* 
<motion.h1
      className={`${styles.title} ${underline && styles.underline}
    ${small && styles.small} ${border && styles.border}`}
      data-aos="fade-up"
      {...props}
    >
      {title}
    </motion.h1>
*/
