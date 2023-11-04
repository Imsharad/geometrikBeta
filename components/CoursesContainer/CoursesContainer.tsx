import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import CourseCard from "../CourseCard/CourseCard";
import Responsive from "@/layouts/Responsive";
import CourseData from "@/data/courseData";

const classes = stylesConfig(styles, "course-container");

const CoursesContainer: React.FC = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<div className={classes("-header")}>
						<Typography
							as="h1"
							weight="bold"
							size="xxl"
							family="red-hat-display"
							className={classes("-title-line")}
						>
							Our Courses
						</Typography>
					</div>
					<div className={classes("-cards-container")}>
						<Responsive.Row className={classes("-cards-items")}>
							{CourseData.map((courses, index) => (
								<Responsive.Col
									xlg={48}
									lg={48}
									md={48}
									sm={100}
									xsm={100}
									key={index}
								>
									<CourseCard
										tag={courses.tag}
										heading={courses.heading}
										description={courses.description}
										overlay={courses.overlay}
										duration={courses.duration}
										price={courses.price}
									/>
								</Responsive.Col>
							))}
						</Responsive.Row>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesContainer;
