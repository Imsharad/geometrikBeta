import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import Responsive from "@/layouts/Responsive";
import WhyUsCard1 from "../WhyUsCards/WhyUsCard1/WhyUsCard1";
import WhyUsCard2 from "../WhyUsCards/WhyUsCard2/WhyUsCard2";
import WhyUsCard3 from "../WhyUsCards/WhyUsCard3/WhyUsCard3";
import WhyUsCard4 from "../WhyUsCards/WhyUsCard4/WhyUsCard4";
import WhyUsCard5 from "../WhyUsCards/WhyUsCard5/WhyUsCard5";

const classes = stylesConfig(styles, "why-us-container");

const WhyUsContainer = () => {
	return (
		<>
			<div className={classes("")}></div>
			<div className={classes("-gradient-container")}></div>
			<div className={classes("-container")}>
				<div className={classes("-header")}>
					<Typography
						as="h1"
						weight="bold"
						size="xxl"
						family="red-hat-display"
						className={classes("-title-line")}
					>
						Why Us
					</Typography>
					<Typography
						as="p"
						weight="regular"
						size="s"
						family="red-hat-text"
						className={classes("-heading-desc")}
					>
						Our courses teach you the AI and machine learning skills
						that are in high demand. Learn how to build, train and
						optimize large language models like GPT-3. Gain
						real-world experience with transformers, embeddings,
						attention mechanisms and more.
					</Typography>
				</div>

				<div className={classes("-cards-container")}>
					<Responsive.Row className={classes("-cards-items-1")}>
						<Responsive.Col
							xlg={100}
							lg={100}
							md={100}
							sm={100}
							xsm={100}
							// key={index}
						>
							<WhyUsCard1 />
							<WhyUsCard2 />
							<WhyUsCard3 />
						</Responsive.Col>
					</Responsive.Row>
					<Responsive.Row className={classes("-cards-items-2")}>
						<Responsive.Col
							xlg={100}
							lg={100}
							md={100}
							sm={100}
							xsm={100}
							// key={index}
						>
							<WhyUsCard4 />
							<WhyUsCard5 />
						</Responsive.Col>
					</Responsive.Row>
				</div>

				<hr className={classes("-why-us-hr")} />
			</div>
		</>
	);
};

export default WhyUsContainer;
