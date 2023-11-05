import React from "react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import vectorImg from "@/public/images/vector-img.svg";
import chatgpt from "@/public/icons/chatgpt.svg";
import bard from "@/public/icons/bard.svg";
import bing from "@/public/icons/bing.svg";
import boat from "@/public/icons/boat.svg";
import capcut from "@/public/icons/capcut.png";
import codium from "@/public/icons/codium.png";
import copilot from "@/public/icons/copilot.svg";
import designer from "@/public/icons/designer.png";
import github from "@/public/icons/github.svg";

const classes = stylesConfig(styles, "why-us-card");

const WhyUsCard1 = () => {
	return (
		<>
			<div className={classes("")}>
				<div className={classes("-container")}>
					<Image
						src={vectorImg}
						alt="vector-img"
						className={classes("-bg-vector")}
					/>
					<Image
						className={classes("-icons", "-icon-1")}
						src={bard}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-2")}
						src={bing}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-3")}
						src={boat}
						width={60}
						height={60}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-4")}
						src={capcut}
						width={60}
						height={60}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-5")}
						src={codium}
						width={60}
						height={60}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-6")}
						src={copilot}
						width={68}
						height={68}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-7")}
						src={designer}
						width={60}
						height={60}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-8")}
						src={github}
						width={60}
						height={60}
						alt="1"
					/>
					<Image
						className={classes("-icons", "-icon-9")}
						src={chatgpt}
						width={60}
						height={60}
						alt="1"
					/>
					<div className={classes("-icons-bg")} />
					<div className={classes("-text-container")}>
						<Typography
							as="div"
							weight="semi-bold"
							size="s"
							family="red-hat-display"
							className={classes("-text-title")}
						>
							Hands-On Practice with Cutting-Edge AI
						</Typography>
						<Typography
							className={classes("-text-subtitle")}
							as="div"
							weight="semi-bold"
							size="xs"
						>
							Get access to exclusive industry tools and datasets
							to build your own large language models. Our
							project-based approach helps you gain practical
							experience through implementing models from research
							papers.
						</Typography>
					</div>
				</div>
			</div>
		</>
	);
};

export default WhyUsCard1;
