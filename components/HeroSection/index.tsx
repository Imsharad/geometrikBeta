// import React, { useState, useEffect } from "react";
// import styles from "./styles.module.scss";

// const texts = [
// 	"NLP",
// 	"Data Science",
// 	"Python",
// 	"UI/UX Design",
// 	"ChatGPT",
// 	"LLM",
// 	"NLP",
// 	"Data Science",
// ];

// const HeroSection: React.FC = () => {
// 	const [currentIndex, setCurrentIndex] = useState(1);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
// 		}, 2000);

// 		return () => clearInterval(interval);
// 	}, []);

// 	const getClassName = (index: number) => {
// 		return index === currentIndex
// 			? `${styles.textItem} ${styles.active}`
// 			: styles.textItem;
// 	};

// 	return (
// 		<div
// 			className={styles.textContainer}
// 			style={{ transform: `translateY(-${currentIndex * 24}px)` }}
// 		>
// 			{texts.map((text, index) => (
// 				<div key={index} className={getClassName(index)}>
// 					{text}
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default HeroSection;

import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";
import { Typography } from "@/library";

const classes = stylesConfig(styles, "hero-section");

const HeroSection = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-heading")}>
					<div className={classes("-heading-title-1")}>
						<Typography
							family="red-hat-display"
							size="lg"
							weight="bold"
							as="h3"
							className={classes("-heading-title-1-text")}
						>
							Learn in-demand
						</Typography>
					</div>
					<div className={classes("-heading-title-2")}>
						<Typography
							family="red-hat-display"
							size="xxxl"
							weight="bold"
							as="span"
							className={classes("-heading-title-2-text-1")}
						>
							AI Skills
						</Typography>
						<Typography
							family="red-hat-display"
							size="xxxl"
							weight="bold"
							as="span"
							className={classes("-heading-title-2-text-2")}
						>
							{" "}
							from
						</Typography>
					</div>
					<div className={classes("-heading-title-3")}>
						<Typography
							family="red-hat-display"
							size="xxxl"
							weight="bold"
							as="span"
							className={classes("-heading-title-3-text")}
						>
							Industry Experts
						</Typography>
					</div>
				</div>
				<div className={classes("-heading-subtitle")}>
					<Typography
						family="red-hat-text"
						size="s"
						weight="medium"
						as="p"
						className={classes("-heading-subtitle-text")}
					>
						Accelerate your career with our online courses in
						leveraging chatGPT to become data scientist
					</Typography>
				</div>
				<div className={classes("-top-gradient")}></div>{" "}
			</div>
		</>
	);
};

export default HeroSection;
