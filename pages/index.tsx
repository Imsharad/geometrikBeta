import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import HeroSection from "@/components/HeroSection";
import CoursesContainer from "@/components/CoursesContainer/CoursesContainer";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<HeroSection />
		<CoursesContainer />
	</main>
);

export default HomePage;
