import React from "react";
import { stylesConfig } from "@/utils/functions";
import styles from "@/styles/pages/Home.module.scss";
import HeroSection from "@/components/HeroSection";
import CoursesContainer from "@/components/CoursesContainer/CoursesContainer";
import WhyUsContainer from "@/components/WhyUsContainer/WhyUsContainer";
import TestimonialsContainer from "@/components/TestimonialContainer/TestimonialContainer";
import Footer from "@/components/Footer";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<main className={classes("")}>
		<HeroSection />
		<CoursesContainer />
		<WhyUsContainer />
		<TestimonialsContainer />
		<Footer />
	</main>
);

export default HomePage;
