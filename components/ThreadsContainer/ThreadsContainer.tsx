import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Button, Typography } from "@/library";
import Responsive from "@/layouts/Responsive";
import threadsData from "@/data/threadsData";
import ThreadsCard from "../ThreadsCard/ThreadsCard";

const classes = stylesConfig(styles, "threads-container");

const ThreadsContainer = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-gradient-container")}></div>
				<div className={classes("-header")}>
					<Typography
						as="h1"
						weight="bold"
						size="xxl"
						family="red-hat-display"
						className={classes("-title-line")}
					>
						Threads
					</Typography>
				</div>
				<div className={classes("-cards-container")}>
					{/* <Responsive.Row className={classes("-cards-items")}> */}
					{/* {testimonialData.map((testimonial, index) => (
							<Responsive.Col
								xlg={31}
								lg={31}
								md={31}
								sm={47}
								xsm={47}
								key={index}
							> */}
					<ThreadsCard
						avatar={threadsData[0].avatar}
						name={threadsData[0].name}
						handle={threadsData[0].handle}
						date={threadsData[0].date}
						title={threadsData[0].title}
						desc={threadsData[0].desc}
						hashtag={threadsData[0].hashtag}
						likes={threadsData[0].likes}
						comments={threadsData[0].comments}
						color={threadsData[0].color}
						border={threadsData[0].border}
						background={threadsData[0].background}
						boxShadow={threadsData[0].boxShadow}
					/>
					{/* </Responsive.Col>
						))} */}
					{/* </Responsive.Row> */}
				</div>
			</div>
		</>
	);
};

export default ThreadsContainer;
