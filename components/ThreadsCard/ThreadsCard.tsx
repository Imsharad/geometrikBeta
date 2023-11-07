import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
import { Typography } from "@/library";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { IThreadsDataType } from "@/types/threads";
import { AiOutlineTwitter, AiOutlineHeart } from "react-icons/ai";

const classes = stylesConfig(styles, "threads-card-container");

interface ThreadsCardProps extends IThreadsDataType {
	avatar: StaticImageData;
	name: string;
	handle: string;
	date: string;
	title: string;
	desc: string;
	hashtag: string;
	likes: string;
	comments: string;
	color: string;
	border: string;
	background: string;
	boxShadow: string;
}

const ThreadsCard: React.FC<ThreadsCardProps> = ({
	avatar,
	name,
	handle,
	date,
	title,
	desc,
	hashtag,
	likes,
	comments,
	color,
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
				<div className={classes("-threads-header")}>
					<Image
						src={avatar}
						alt="Author-Img"
						className={classes("-header-img")}
					/>
					<div className={classes("-header-contents")}>
						<Typography
							as="div"
							family="red-hat-text"
							size="sm"
							weight="semi-bold"
							className={classes("-header-name")}
							style={{
								color: color,
							}}
						>
							{name}
						</Typography>

						{/* <hr className={classes("-header-hr")} /> */}

						<div className={classes("-header-titles")}>
							<Typography
								as="span"
								family="red-hat-text"
								size="xs"
								weight="regular"
								className={classes("-subtitle")}
							>
								{handle}
							</Typography>
							<span className={classes("-dot")}></span>
							<Typography
								as="span"
								family="red-hat-text"
								size="xs"
								weight="regular"
								className={classes("-subtitle")}
							>
								{date}
							</Typography>
						</div>
					</div>
					<AiOutlineTwitter
						className={classes("-twitter-logo")}
						style={{
							color: color,
						}}
					/>
				</div>

				<div className={classes("-threads-body")}>
					<Typography
						as="div"
						family="red-hat-text"
						size="xs"
						weight="regular"
						style={{ color: color }}
						className={classes("-body-title")}
					>
						{title}
					</Typography>
					<Typography
						as="div"
						family="red-hat-text"
						size="xs"
						weight="regular"
						className={classes("-body-desc")}
					>
						{desc}
					</Typography>
					<Typography
						as="div"
						family="red-hat-text"
						size="xs"
						weight="regular"
						style={{ color: color }}
						className={classes("-body-hashtag")}
					>
						{hashtag}
					</Typography>
				</div>
				<div className={classes("-likes-comments")}>
					<span className={classes("-likes-comments-content")}>
						<AiOutlineHeart
							style={{
								color: "white",
							}}
						/>
						<Typography
							as="div"
							family="red-hat-text"
							size="xs"
							weight="regular"
							style={{ color: color }}
							className={classes("-likes")}
						>
							{likes}
						</Typography>
					</span>
					<span className={classes("-likes-comments-content")}>
						<AiOutlineHeart
							style={{
								color: "white",
							}}
						/>
						<Typography
							as="div"
							family="red-hat-text"
							size="xs"
							weight="regular"
							style={{ color: color }}
							className={classes("-likes")}
						>
							{likes}
						</Typography>
					</span>
				</div>
			</div>
		</>
	);
};

export default ThreadsCard;
