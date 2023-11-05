import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";

const classes = stylesConfig(styles, "why-us-card3");

const WhyUsCard3 = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<div className={classes("-top-gradient")} />
					<div className={classes("-card-desc")}>
						<Typography
							as="div"
							size="s"
							weight="bold"
							family="red-hat-display"
							className={classes("-card-title")}
						>
							Join the AI Revolution
						</Typography>
						<Typography
							as="div"
							size="xs"
							family="red-hat-display"
							weight="semi-bold"
							className={classes("-card-subtitle")}
						>
							Dont just learn about large language models - train
							them yourself. Gain expertise in the futuristic AI
							technologies that are shaping the world. Enroll
							today and unleash your potential in this exciting
							field!
						</Typography>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyUsCard3;
