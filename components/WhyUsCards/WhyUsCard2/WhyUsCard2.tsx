import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import bgVector from "@/public/images/bg-vector-card2.svg";
import person1 from "@/public/images/person1.png";
import person2 from "@/public/images/person2.png";
import person3 from "@/public/images/person3.png";
import cmpLogo1 from "@/public/icons/microsoft.svg";
import cmpLogo2 from "@/public/icons/apple.svg";

const classes = stylesConfig(styles, "why-us-card2");

const WhyUsCard2 = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<Image
						src={bgVector}
						alt="vector-img"
						className={classes("-bg-vector")}
					/>
					<div className={classes("-top-container-gradient")} />
					<div className={classes("-top-container")}></div>

					<div className={classes("-nametag-1")}>
						<div className={classes("-nametag-1-container")} />
						<div className={classes("-nametag-1-contents")}>
							<Typography
								as="div"
								weight="semi-bold"
								size="sm"
								family="red-hat-display"
								className={classes("-title")}
							>
								Himanshu Potdar
							</Typography>
							<Typography
								className={classes("-designation")}
								as="div"
								weight="semi-bold"
								size="xs"
								family="red-hat-display"
							>
								Seniors AI Engineer
							</Typography>
						</div>
						<Image
							className={classes("-avatar-1")}
							width={80}
							height={80}
							src={person1}
							alt="image"
						/>
						<div
							className={classes("-nametag-1-company-container")}
						>
							<div className={classes("-nametag-1-company-bg")} />
							<Image
								className={classes("-nametag-1-company-img")}
								src={cmpLogo1}
								alt="company-img"
								width={15}
								height={15}
							/>
						</div>
					</div>
					<div className={classes("-nametag-2")}>
						<div className={classes("-nametag-2-container")} />
						<div className={classes("-nametag-2-contents")}>
							<Typography
								as="div"
								weight="semi-bold"
								size="sm"
								family="red-hat-display"
								className={classes("-title")}
							>
								Abhilasha Singh
							</Typography>

							<Typography
								className={classes("-designation")}
								as="div"
								weight="semi-bold"
								size="xs"
								family="red-hat-display"
							>
								Seniors AI Engineer
							</Typography>
						</div>
						<Image
							className={classes("-avatar-2")}
							width={80}
							height={80}
							src={person2}
							alt="image"
						/>
						<div
							className={classes("-nametag-2-company-container")}
						>
							<div className={classes("-nametag-2-company-bg")} />
							<Image
								className={classes("-nametag-2-company-img")}
								src={cmpLogo1}
								alt="company-img"
								width={15}
								height={15}
							/>
						</div>
					</div>
					<div className={classes("-nametag-3")}>
						<div className={classes("-nametag-3-container")} />
						<div className={classes("-nametag-3-contents")}>
							<Typography
								as="div"
								weight="semi-bold"
								size="sm"
								family="red-hat-display"
								className={classes("-title")}
							>
								Aman Arora
							</Typography>
							<Typography
								className={classes("-designation")}
								as="div"
								weight="semi-bold"
								size="xs"
								family="red-hat-display"
							>
								Seniors ML Engineer
							</Typography>
						</div>
						<Image
							className={classes("-avatar-3")}
							src={person3}
							alt="avatar"
							width={80}
							height={80}
						/>
						<div
							className={classes("-nametag-3-company-container")}
						>
							<div className={classes("-nametag-3-company-bg")} />
							<Image
								className={classes("-nametag-3-company-img")}
								src={cmpLogo2}
								alt="avatar"
								width={20}
								height={20}
							/>
						</div>
					</div>

					<div className={classes("-card-desc")}>
						<Typography
							as="div"
							weight="semi-bold"
							size="s"
							family="red-hat-display"
							className={classes("-card-title")}
						>
							Guidance from AI Experts
						</Typography>
						<Typography
							as="div"
							weight="semi-bold"
							size="xs"
							family="red-hat-display"
							className={classes("-card-subtitle")}
						>
							Our instructors are active AI/ML researchers and
							engineers from top companies. They provide
							mentorship and tailored feedback to help you master
							complex concepts and the latest advancements like
							massive language models.
						</Typography>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyUsCard2;
