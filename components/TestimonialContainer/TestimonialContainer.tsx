import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Button, Typography } from "@/library";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import testimonialData from "@/data/testimonialData";
import Responsive from "@/layouts/Responsive";

const classes = stylesConfig(styles, "testimonial-container");

const TestimonialsContainer: React.FC = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-gradient-container")}></div>
				<div className={classes("-header")}>
					<Typography
						as="h1"
						weight="bold"
						size="xxl"
						family="red-hat-display"
						className={classes("-title-line")}
					>
						Testimonials
					</Typography>
				</div>

				<div className={classes("-cards-container")}>
					<Responsive.Row className={classes("-cards-items")}>
						{testimonialData.map((testimonial, index) => (
							<Responsive.Col
								xlg={30}
								lg={30}
								md={30}
								sm={100}
								xsm={100}
								key={index}
							>
								<TestimonialCard
									avatar={testimonial.avatar}
									name={testimonial.name}
									description={testimonial.description}
									designation={testimonial.designation}
									border={testimonial.border}
									background={testimonial.background}
									boxShadow={testimonial.boxShadow}
								/>
							</Responsive.Col>
						))}
					</Responsive.Row>
				</div>
				<Button
					theme="outlined"
					className={classes("-testimonial-btn")}
				>
					Read All Success Stories
				</Button>

				<hr className={classes("-testimonial-hr")} />
			</div>
		</>
	);
};

export default TestimonialsContainer;
