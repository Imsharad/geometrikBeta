import React from "react";
import styles from "./styles.module.scss";

import { stylesConfig } from "@/utils/functions";

const classes = stylesConfig(styles, "courses-card");

const CourseCard = () => {
	return (
		<>
			<div className={classes("")}>Course Card</div>
		</>
	);
};

export default CourseCard;
