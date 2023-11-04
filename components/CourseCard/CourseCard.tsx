import React from "react";
import styles from "./styles.module.scss";

import { stylesConfig } from "@/utils/functions";
import { ICoursesDataType } from "@/types/Courses";

const classes = stylesConfig(styles, "courses-card");

interface CourseCardProps extends ICoursesDataType {
	tag: string;
	heading: string;
	description: string;
	overlay: string;
	duration: string;
	price: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
	tag,
	heading,
	description,
	overlay,
	duration,
	price,
}) => {
	return (
		<>
			<div className={classes("")}></div>
		</>
	);
};

export default CourseCard;
