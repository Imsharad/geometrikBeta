import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import bgVector from "@/public/images/bg-vector-card5.svg";
import Image from "next/image";

const classes = stylesConfig(styles, "why-us-card5");

const WhyUsCard5 = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<div className={classes("-top-gradient")} />
					{/* 
					<div
						className="Group"
						style={{
							width: 878.62,
							height: 1052.24,
							left: 976.7,
							top: -291.49,
							position: "absolute",
							transform: "rotate(90.28deg)",
							transformOrigin: "0 0",
							mixBlendMode: "overlay",
						}}
					></div> */}
					<div className={classes("-top-container")}>
						<Image
							src={bgVector}
							alt="vector-img"
							className={classes("-bg-vector")}
						/>
						<div className={classes("-laptop-container")} />
						<div className={classes("-mobile-container")} />
						<Typography
							as="div"
							family="red-hat-display"
							weight="semi-bold"
							size="xxs"
							className={classes("-mobile-music-start-text")}
						>
							11:14
						</Typography>
						<Typography
							as="div"
							family="red-hat-display"
							weight="semi-bold"
							size="xxs"
							className={classes("-mobile-music-end-text")}
						>
							18:45
						</Typography>
						<Typography
							as="div"
							family="red-hat-display"
							weight="bold"
							size="xs"
							className={classes("-laptop-heading")}
						>
							Lecture 1 - ChatGPT Intoduction
						</Typography>
						<Typography
							as="div"
							family="red-hat-display"
							weight="bold"
							size="xxs"
							className={classes("-mobile-heading")}
						>
							Lecture 1 - ChatGPT Intoduction
						</Typography>
						<div className={classes("-laptop-seek-overlay")}></div>
						<div className={classes("-laptop-seek")}></div>
						<div className={classes("-laptop-seek-dot")}></div>
						<Typography
							as="div"
							family="red-hat-display"
							weight="semi-bold"
							size="xs"
							className={classes("-laptop-music-end-text")}
						>
							18:45
						</Typography>
						<Typography
							as="div"
							family="red-hat-display"
							weight="semi-bold"
							size="xs"
							className={classes("-laptop-music-start-text")}
						>
							11:14
						</Typography>
						<div className={classes("-mobile-controls")}>
							<div className={classes("-mobile-seek")}></div>
							<div
								className={classes("-mobile-seek-overlay")}
							></div>
							<div className={classes("-mobile-seek-dot")}></div>
						</div>
						<div className={classes("-mobile-up-next-container")}>
							<Typography
								as="div"
								family="red-hat-display"
								weight="semi-bold"
								size="xxs"
								className={classes("-up-next-text")}
							>
								Up next
							</Typography>
							<Typography
								as="div"
								family="red-hat-display"
								weight="semi-bold"
								size="xxs"
								className={classes("-up-next-title")}
							>
								Prompt Generating Methods
							</Typography>
						</div>
					</div>

					<Typography className={classes("-card-desc-container")}>
						<Typography
							as="div"
							family="red-hat-display"
							weight="semi-bold"
							size="s"
							className={classes("-card-desc-title")}
						>
							Flexible, Self-Paced Learning
						</Typography>
						<Typography
							as="div"
							family="red-hat-display"
							weight="semi-bold"
							size="xs"
							className={classes("-card-desc-title")}
						>
							With our online platform, you can learn AI skills on
							your schedule. Self-paced courses and flexible
							access mean you can level up your expertise anytime,
							anywhere while keeping your life on track.
						</Typography>
					</Typography>
				</div>
			</div>
		</>
	);
};

export default WhyUsCard5;
