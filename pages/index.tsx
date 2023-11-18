import React from "react";
import HeroSection from "@/components/HeroSection";
import CoursesContainer from "@/components/CoursesContainer/CoursesContainer";
import WhyUsContainer from "@/components/WhyUsContainer/WhyUsContainer";
import TestimonialsContainer from "@/components/TestimonialContainer/TestimonialContainer";
import ThreadsContainer from "@/components/ThreadsContainer/ThreadsContainer";
import Footer from "@/components/Footer";
import FaqContainer from "@/components/FaqContainer/FaqContainer";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<HeroSection />
		<CoursesContainer />
		<WhyUsContainer />
		<TestimonialsContainer />
		<ThreadsContainer />
		<FaqContainer />
		<Footer />
	</main>
);

export default HomePage;
