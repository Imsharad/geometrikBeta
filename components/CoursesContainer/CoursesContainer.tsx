import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import CourseCard1 from "../CourseCards/CourseCard1/CourseCard1";
import CourseCard2 from "../CourseCards/CourseCard1/CourseCard1";
import CourseCard3 from "../CourseCards/CourseCard1/CourseCard1";
import CourseCard4 from "../CourseCards/CourseCard1/CourseCard1";
import CourseCard5 from "../CourseCards/CourseCard1/CourseCard1";
import CourseCard6 from "../CourseCards/CourseCard1/CourseCard1";
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
							{/* {CourseData.map((courses, index) => ( */}
							<Responsive.Col
								xlg={48}
								lg={48}
								md={48}
								sm={100}
								xsm={100}
								// key={index}
							>
								<CourseCard1
									tag={CourseData[0].tag}
									heading={CourseData[0].heading}
									description={CourseData[0].description}
									overlay={CourseData[0].overlay}
									duration={CourseData[0].duration}
									price={CourseData[0].price}
								/>
							</Responsive.Col>
							<Responsive.Col
								xlg={48}
								lg={48}
								md={48}
								sm={100}
								xsm={100}
							>
								<CourseCard2
									tag={CourseData[1].tag}
									heading={CourseData[1].heading}
									description={CourseData[1].description}
									overlay={CourseData[1].overlay}
									duration={CourseData[1].duration}
									price={CourseData[1].price}
								/>
							</Responsive.Col>
							<Responsive.Col
								xlg={48}
								lg={48}
								md={48}
								sm={100}
								xsm={100}
							>
								<CourseCard3
									tag={CourseData[2].tag}
									heading={CourseData[2].heading}
									description={CourseData[2].description}
									overlay={CourseData[2].overlay}
									duration={CourseData[2].duration}
									price={CourseData[2].price}
								/>
							</Responsive.Col>
							<Responsive.Col
								xlg={48}
								lg={48}
								md={48}
								sm={100}
								xsm={100}
							>
								<CourseCard4
									tag={CourseData[3].tag}
									heading={CourseData[3].heading}
									description={CourseData[3].description}
									overlay={CourseData[3].overlay}
									duration={CourseData[3].duration}
									price={CourseData[3].price}
								/>
							</Responsive.Col>

							<Responsive.Col
								xlg={48}
								lg={48}
								md={48}
								sm={100}
								xsm={100}
							>
								<CourseCard5
									tag={CourseData[4].tag}
									heading={CourseData[4].heading}
									description={CourseData[4].description}
									overlay={CourseData[4].overlay}
									duration={CourseData[4].duration}
									price={CourseData[4].price}
								/>
							</Responsive.Col>

							<Responsive.Col
								xlg={48}
								lg={48}
								md={48}
								sm={100}
								xsm={100}
							>
								<CourseCard6
									tag={CourseData[5].tag}
									heading={CourseData[5].heading}
									description={CourseData[5].description}
									overlay={CourseData[5].overlay}
									duration={CourseData[5].duration}
									price={CourseData[5].price}
								/>
							</Responsive.Col>
							{/* ))} */}
						</Responsive.Row>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoursesContainer;
