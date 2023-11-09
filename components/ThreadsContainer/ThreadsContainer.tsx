import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import Responsive from "@/layouts/Responsive";
import threadsData from "@/data/threadsData";
import ThreadsCard from "../ThreadsCard/ThreadsCard";
import Masonry from "@/layouts/Masonry/index";

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
					{threadsData.map((thread, index) => (
						// <Responsive.Col
						// 	xlg={31}
						// 	lg={31}
						// 	md={31}
						// 	sm={47}
						// 	xsm={47}
						// 	key={index}
						// >
						// <Masonry
						// 	xsm={1}
						// 	sm={1}
						// 	md={2}
						// 	lg={3}
						// 	xlg={4}
						// 	key={index}
						// >
						<div className={classes("-thread-card")} key={index}>
							<ThreadsCard
								// key={index}
								avatar={thread.avatar}
								name={thread.name}
								handle={thread.handle}
								date={thread.date}
								title={thread.title}
								desc={thread.desc}
								hashtag={thread.hashtag}
								imgPresent={thread.imgPresent}
								likes={thread.likes}
								comments={thread.comments}
								color={thread.color}
								height={thread.height}
								border={thread.border}
								background={thread.background}
								boxShadow={thread.boxShadow}
							/>
						</div>
						// </Masonry>

						// </Responsive.Col>
					))}
					{/* </Responsive.Row> */}
				</div>

				<hr className={classes("-threads-hr")} />
			</div>
		</>
	);
};

export default ThreadsContainer;
