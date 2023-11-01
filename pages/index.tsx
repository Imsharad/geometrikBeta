import React from "react";
import { Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<Typography as="h1" className={classes("")}>
			Next.js Boilerplate!
		</Typography>
	</main>
);

export default HomePage;
