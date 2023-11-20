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
import Seo from "@/layouts/Seo";

const classes = stylesConfig(styles, "home");

const HomePage: React.FC = () => (
	<>
		<Seo
			title="Growth Rocket"
			description="Accelerate your career with our online courses in leveraging chatGPT to become data scientist"
			author="opengig"
			canonical="https://growthrocket.ai/"
			icons={[
				{
					rel: "icon",
					href: "/favicon.ico",
				},
				{
					rel: "apple-touch-icon",
					href: "/apple-touch-icon.png",
					sizes: "180x180",
				},
			]}
			siteName="Growth Rocket"
		/>
		<main className={classes("")}>
			<HeroSection />
			<CoursesContainer />
			<WhyUsContainer />
			<TestimonialsContainer />
			<ThreadsContainer />
			<FaqContainer />
			<Footer />
		</main>
	</>
);

export default HomePage;
