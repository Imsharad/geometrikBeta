import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";

const classes = stylesConfig(styles, "courses-container");

const CoursesContainer = () => {
	return (
		<>
			<div className={classes("")}>Courses</div>
		</>
	);
};

export default CoursesContainer;
