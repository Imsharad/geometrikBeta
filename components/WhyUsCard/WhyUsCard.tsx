import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import { StaticImageData } from "next/image";
import { IWhyUsDataType } from "@/types/WhyUs";

const classes = stylesConfig(styles, "why-us-card");

interface WhyUsCardProps extends IWhyUsDataType {
	topImg: StaticImageData;
	heading: string;
	desc: string;
	border: string;
	background: string;
}

const WhyUsCard: React.FC<WhyUsCardProps> = ({
	topImg,
	heading,
	desc,
	border,
	background,
}) => {
	return (
		<>
			<div
				className={classes("")}
				style={{
					border: border,
				}}
			>
				<div
					className={classes("-top-gradient")}
					style={{ background: background }}
				/>
				<div className={classes("-img-container")}>
					<Image
						src={topImg}
						alt="Why Us Card Image"
						className={classes("-top-img")}
					/>
				</div>
				<div className={classes("-text-container")}>
					<Typography
						as="div"
						family="red-hat-display"
						size="s"
						weight="semi-bold"
						className={classes("-heading")}
					>
						{heading}
					</Typography>
					<Typography
						as="div"
						family="red-hat-display"
						size="xs"
						weight="semi-bold"
						className={classes("-desc")}
					>
						{desc}
					</Typography>
				</div>
			</div>
		</>
	);
};

export default WhyUsCard;
