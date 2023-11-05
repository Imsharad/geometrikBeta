import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import HeroSection from "@/components/HeroSection";
import CoursesContainer from "@/components/CoursesContainer/CoursesContainer";
import WhyUsContainer from "@/components/WhyUsContainer/WhyUsContainer";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<HeroSection />
		<CoursesContainer />
		<WhyUsContainer />
	</main>
);

export default HomePage;
