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

				{/* <div className={classes("-cards-container")}>
					<Responsive.Row className={classes("-cards-items-1")}>
						<Responsive.Col
							xlg={100}
							lg={33}
							md={33}
							sm={100}
							xsm={100}
							// key={index}
						>
							<WhyUsCard1 />
						</Responsive.Col>
						<Responsive.Col
							xlg={100}
							lg={33}
							md={33}
							sm={100}
							xsm={100}
						>
							<WhyUsCard2 />
						</Responsive.Col>
						<Responsive.Col
							xlg={100}
							lg={33}
							md={33}
							sm={100}
							xsm={100}
						>
							<WhyUsCard3 />
						</Responsive.Col>
					</Responsive.Row>
					<Responsive.Row className={classes("-cards-items-2")}>
						<Responsive.Col
							xlg={100}
							lg={45}
							md={49}
							sm={100}
							xsm={100}
							// key={index}
						>
							<WhyUsCard4 />
						</Responsive.Col>
						<Responsive.Col
							xlg={100}
							lg={45}
							md={49}
							sm={100}
							xsm={100}
						>
							<WhyUsCard5 />
						</Responsive.Col>
					</Responsive.Row>
				</div> */}

				<div className={classes("-cards-container")}>
					<Responsive.Row>
						{whyUsData.map((data, index) => (
							<Responsive.Col
								xlg={32}
								lg={33}
								md={32}
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
