import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import personIcon from "@/public/images/card-4-person.png";
import leftBg from "@/public/images/Exclude-img.svg";
import apple from "@/public/icons/apple2.svg";
import meta from "@/public/icons/meta.svg";
import google from "@/public/icons/google.svg";
import amazon from "@/public/icons/amazon.svg";
import netflix from "@/public/icons/netflix.svg";
import leftWaves from "@/public/images/left-waves.svg";
import rightWaves from "@/public/images/right-waves.svg";
import rocket from "@/public/icons/rocket-two.svg";

const classes = stylesConfig(styles, "why-us-card4");

const WhyUsCard4 = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<div className={classes("-top-container-gradient")} />
					<div className={classes("-top-container")}>
						<div className={classes("-left-container")}>
							<Image
								src={leftBg}
								alt="leftbg"
								width={150}
								height={269}
							/>
							<div className={classes("-header-container")}>
								<Image
									src={personIcon}
									alt="person"
									width={30}
									height={30}
									className={classes("-left-bg")}
								/>
								<div className={classes("-header-texts")}>
									<Typography
										as="div"
										weight="semi-bold"
										size="xxs"
										family="red-hat-display"
										className={classes("-title")}
									>
										Deepti Varade
									</Typography>
									<Typography
										as="div"
										weight="semi-bold"
										size="xxs"
										family="red-hat-text"
										className={classes("-subtitle")}
									>
										Growth Rocket AI Co-hort
									</Typography>
								</div>
							</div>
						</div>

						<div className={classes("-middle-container")}>
							<Image
								src={leftWaves}
								alt="left-waves"
								width={132}
								height={132}
							/>

							<Image
								src={rightWaves}
								alt="right-waves"
								width={132}
								height={132}
							/>

							<div className={classes("-shadow-layer-2")} />
							{/* </div> */}
							<Image
								src={rocket}
								alt="rocker"
								className={classes("-rocket-img")}
							/>
						</div>

						<div className={classes("-right-container")}>
							<Image
								src={amazon}
								alt="amazon"
								className={classes("-icons")}
							/>
							<Image
								src={meta}
								alt="meta"
								className={classes("-icons")}
							/>
							<Image
								src={google}
								alt="google"
								className={classes("-icons")}
							/>
							<Image
								src={apple}
								alt="apple"
								className={classes("-icons")}
							/>
							<Image
								src={netflix}
								alt="netflix"
								className={classes("-icons")}
							/>
						</div>
					</div>

					<div className={classes("-bottom-container")}>
						<Typography
							as="div"
							weight="semi-bold"
							size="s"
							family="red-hat-display"
							className={classes("-bottom-title")}
						>
							Prep for an AI Career
						</Typography>
						<Typography
							as="div"
							weight="semi-bold"
							size="xs"
							family="red-hat-display"
							className={classes("-bottom-subtitle")}
						>
							We partner with AI labs, research groups, and tech
							leaders hiring for AI roles. Our career coaching,
							resume help, and exclusive hiring network will equip
							you to land a job in AI/ML.
						</Typography>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyUsCard4;
