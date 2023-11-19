import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import { ITestimonialDataType } from "@/types/Testimonials";
import { StaticImageData } from "next/image";
import cardImgBg from "@/public/images/card-img-bg.svg";
import Image from "next/image";

const classes = stylesConfig(styles, "testimonial-card-container");

interface TestimonialCardProps extends ITestimonialDataType {
	avatar: StaticImageData;
	name: string;
	designation: string;
	description: string;
	border: string;
	background: string;
	boxShadow: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
	avatar,
	name,
	designation,
	description,
	border,
	background,
	boxShadow,
}) => {
	return (
		<>
			<div
				className={classes("")}
				style={{
					border: border,
					background: background,
					boxShadow: boxShadow,
				}}
			>
				<div className={classes("-testimonials-header")}>
					<div className={classes("-img-container")}>
						<Image
							src={cardImgBg}
							alt="bg-img"
							className={classes("-img-bg")}
						/>
						<Image
							src={avatar}
							alt="Author-Img"
							className={classes("-header-img")}
						/>
					</div>

					<div className={classes("-header-contents")}>
						<Typography
							as="div"
							family="red-hat-text"
							size="sm"
							weight="semi-bold"
							className={classes("-header-name")}
						>
							{name}
						</Typography>

						<hr className={classes("-header-hr")} />

						<div className={classes("-header-logos")}>
							<Typography
								as="h2"
								family="red-hat-text"
								size="xs"
								weight="regular"
								className={classes("-user-course")}
							>
								{designation}
							</Typography>
						</div>
					</div>
				</div>

				<Typography
					as="div"
					family="red-hat-text"
					size="xxs"
					weight="regular"
					className={classes("-testimonial-text")}
				>
					{description}
				</Typography>
			</div>
		</>
	);
};

export default TestimonialCard;
