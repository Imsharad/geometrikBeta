import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import Responsive from "@/layouts/Responsive";
import whyUsData from "@/data/whyUsData";
import WhyUsCard from "../WhyUsCard/WhyUsCard";

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
					<Responsive.Row>
						{whyUsData.map((data, index) => (
							<Responsive.Col
								xlg={whyUsData.length - index <= 2 ? 50 : 33}
								lg={whyUsData.length - index <= 2 ? 50 : 33}
								md={whyUsData.length - index <= 2 ? 50 : 33}
								sm={100}
								xsm={100}
								key={index}
							>
								<WhyUsCard
									topImg={data.topImg}
									heading={data.heading}
									desc={data.desc}
									border={data.border}
									background={data.background}
									width={data.width}
								/>
							</Responsive.Col>
						))}
					</Responsive.Row>
				</div>

				<hr className={classes("-why-us-hr")} />
			</div>
		</>
	);
};

export default WhyUsContainer;
