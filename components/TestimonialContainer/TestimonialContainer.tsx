import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Button, Typography } from "@/library";
import TestimonialCard from "../TestimonialCard1/TestimonialCard1";
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
								xlg={31}
								lg={31}
								md={31}
								sm={47}
								xsm={47}
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
			</div>
		</>
	);
};

export default TestimonialsContainer;
