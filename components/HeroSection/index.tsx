import React, { useEffect, useState } from "react";
import { stylesConfig } from "@/utils/functions";
import { Button, Typography } from "@/library";
import rocketImg from "@/public/icons/rocket.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowRightShort } from "react-icons/bs";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "hero-section");

const HeroSection = () => {
	const [domains, setDomains] = useState([
		"ChatGPT",
		"LLM",
		"NLP",
		"Data Science",
		"Python",
		"UI/UX Design",
	]);

	const shuffleLeft = () => {
		setDomains((prev) => [...prev.slice(1), prev[0]]);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			shuffleLeft();
		}, 10000);

		return () => clearInterval(interval);
	}, [setDomains]);

	const fadeUpVariants = {
		initial: {
			y: 50, // start 50 pixels down from the final position
			opacity: 0,
		},
		animate: {
			y: 0, // animate to the final position
			opacity: 1,
			transition: { duration: 1, ease: "easeOut" },
		},
		exit: {
			y: -50, // animate 50 pixels down as it exits
			opacity: 0,
			transition: { duration: 1, ease: "easeOut" },
		},
	};

	return (
		<>
			<div className={classes("")}>
				<div className={classes("-top-gradient")}></div>

				<div className={classes("-content-container")}>
					<div className={classes("-heading-container")}>
						<div className={classes("-heading")}>
							<div className={classes("-heading-title-1")}>
								<Typography
									family="red-hat-display"
									size="xxxl"
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
									className={classes(
										"-heading-title-2-text-1"
									)}
								>
									AI Skills
								</Typography>
								<Typography
									family="red-hat-display"
									size="xxxl"
									weight="bold"
									as="span"
									className={classes(
										"-heading-title-2-text-2"
									)}
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
								Accelerate your career with our online courses
								in leveraging{" "}
								<Typography
									family="red-hat-text"
									size="s"
									weight="medium"
									as="span"
									className={classes(
										"-heading-subtitle-text-chatgpt"
									)}
								>
									chatGPT
								</Typography>{" "}
								to become data scientist
							</Typography>
						</div>
					</div>

					<div className={classes("-domain-carousal-container")}>
						{domains.map((domain, index) => (
							<AnimatePresence mode="popLayout" key={index}>
								<motion.div
									key={domain}
									initial="initial"
									animate="animate"
									exit="exit"
									variants={fadeUpVariants}
									className={classes("-carousel-items")}
								>
									<Typography
										family="red-hat-display"
										size="xl"
										weight="bold"
										as="div"
										className={classes("-carousal-item")}
									>
										{domain}
									</Typography>
								</motion.div>
							</AnimatePresence>
						))}
					</div>
				</div>
				<Button
					size="medium"
					theme="outlined"
					className={classes("-launch-career-btn")}
				>
					<Image src={rocketImg} alt="rocket" />
					<div className={classes("-btn-desc")}>
						<Typography
							family="red-hat-display"
							size="s"
							weight="bold"
							as="div"
							className={classes("-btn-text-1")}
						>
							Launch your career
						</Typography>
						<Typography
							family="red-hat-text"
							size="s"
							weight="medium"
							as="div"
							className={classes("-btn-text-2")}
						>
							Unlock Opportunities and Achieve Your Goals
						</Typography>
					</div>
					<BsArrowRightShort className={classes("-btn-arrow")} />
				</Button>
				<hr className={classes("-hero-hr")} />
			</div>
		</>
	);
};

export default HeroSection;
