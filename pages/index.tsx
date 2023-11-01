import React from "react";
import { Button, Typography } from "@/library";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<Typography as="h1">Next.js Boilerplate!</Typography>
		<Button>Click me</Button>
	</main>
);

export default HomePage;
