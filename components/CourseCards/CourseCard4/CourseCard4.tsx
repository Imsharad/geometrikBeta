import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { ICoursesDataType } from "@/types/Courses";
import { Typography } from "@/library";
import { HiArrowUpRight } from "react-icons/hi2";

const classes = stylesConfig(styles, "courses-card4");

interface CourseCardProps extends ICoursesDataType {
	tag: string;
	heading: string;
	description: string;
	overlay: string;
	duration: string;
	price: string;
}

const CourseCard4: React.FC<CourseCardProps> = ({
	tag,
	heading,
	description,
	overlay,
	duration,
	price,
}) => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<Typography
						as="div"
						weight="bold"
						size="xs"
						family="red-hat-display"
						className={classes("-tag")}
					>
						{tag}
					</Typography>
					<Typography
						as="div"
						weight="bold"
						size="md"
						family="red-hat-display"
						className={classes("-heading")}
					>
						{heading}
					</Typography>

					<Typography
						as="div"
						weight="regular"
						size="sm"
						family="red-hat-text"
						className={classes("-desc")}
					>
						{description}
					</Typography>

					<Typography
						as="div"
						weight="bold"
						size="xxxl"
						family="red-hat-display"
						className={classes("-overlay")}
					>
						{overlay}
					</Typography>

					<div className={classes("-duration-container")}>
						<Typography
							as="div"
							weight="semi-bold"
							size="xs"
							family="red-hat-text"
							className={classes("-from-text")}
						>
							From
						</Typography>
						<Typography
							as="div"
							weight="semi-bold"
							size="xs"
							family="red-hat-text"
							className={classes("-duration")}
						>
							{duration}
						</Typography>
					</div>

					<div className={classes("-price-container")}>
						<Typography
							as="div"
							weight="semi-bold"
							size="xs"
							family="red-hat-text"
							className={classes("-only-at-text")}
						>
							Only At
						</Typography>
						<Typography
							as="div"
							weight="semi-bold"
							size="xs"
							family="red-hat-text"
							className={classes("-price")}
						>
							{price}
						</Typography>
					</div>

					<div className={classes("-btn-container")}>
						<HiArrowUpRight className={classes("-arrow-icon")} />
					</div>
				</div>
			</div>
		</>
	);
};

export default CourseCard4;
