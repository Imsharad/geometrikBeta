import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import HeroSection from "@/components/HeroSection";
import CoursesContainer from "@/components/CoursesContainer/CoursesContainer";
import WhyUsContainer from "@/components/WhyUsContainer/WhyUsContainer";
import TestimonialsContainer from "@/components/TestimonialContainer/TestimonialContainer";
import ThreadsContainer from "@/components/ThreadsContainer/ThreadsContainer";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<HeroSection />
		<CoursesContainer />
		<WhyUsContainer />
		<TestimonialsContainer />
		<ThreadsContainer />
	</main>
);

export default HomePage;
