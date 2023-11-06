import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";

const classes = stylesConfig(styles, "why-us-card4");

const WhyUsCard4 = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}> </div>
			</div>
		</>
	);
};

export default WhyUsCard4;
