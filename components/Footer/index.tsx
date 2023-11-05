import React from "react";
import styles from "./styles.module.scss";
import { stylesConfig } from "@/utils/functions";
// import TechnestLogo from "@/public/logos/TN_Logo-2.svg";
import Image from "next/image";
import { Button, Typography } from "@/library";
import {
	FaLinkedinIn,
	FaTwitter,
	FaYoutube,
	FaInstagram,
} from "react-icons/fa";
import { useRouter } from "next/router";

const classes = stylesConfig(styles, "footer");

const Footer: React.FC = () => {
	const router = useRouter();
	return (
		<footer className={classes("")}>
			<div className={classes("-container")}>
				<div className={classes("-company-details-offerings")}>
					<div className={classes("-details")}>
						{/* <Image
							src={TechnestLogo}
							alt="Technest Logo"
							className={classes("-footer-logo")}
							onClick={() => {
								router.push("/");
							}}
						/> */}
						<Typography
							as="div"
							size="lg"
							weight="medium"
							family="red-hat-display"
							className={classes("-footer-logo")}
						>
							Growth Rocket
						</Typography>
						<Typography
							as="div"
							size="sm"
							weight="medium"
							family="red-hat-text"
							className={classes("-details-section")}
						>
							Educational experiences that transform lives in a
							community-led learning environment.
						</Typography>
						<Typography
							as="div"
							size="sm"
							weight="medium"
							family="red-hat-text"
							className={classes("-details-section")}
						>
							Be the first in line to know about our latest
							courses
						</Typography>
						<Button
							theme="outlined"
							size="medium"
							className={classes("-register-btn")}
						>
							Join the Waitlist
						</Button>
					</div>
					<div className={classes("-courses")}>
						<Typography
							as="h3"
							size="s"
							weight="bold"
							family="red-hat-text"
							className={classes("-courses-heading")}
						>
							Courses
						</Typography>
						<div className={classes("-courses-contents")}>
							<Typography
								as="div"
								size="xs"
								weight="medium"
								family="red-hat-text"
								className={classes("-courses-contents-items")}
							>
								<a href="#">Data Science</a>
							</Typography>
							<Typography
								as="div"
								weight="medium"
								size="xs"
								family="red-hat-text"
								className={classes("-courses-contents-items")}
							>
								<a href="#">Cyber Security</a>
							</Typography>
							<Typography
								as="div"
								family="red-hat-text"
								weight="medium"
								size="xs"
								className={classes("-courses-contents-items")}
							>
								<a href="#">Business Analytics</a>
							</Typography>
							<Typography
								as="div"
								size="xs"
								weight="medium"
								family="red-hat-text"
								className={classes("-courses-contents-items")}
							>
								<a href="#">Full Stack Development</a>
							</Typography>
						</div>
					</div>
					<div className={classes("-social-media")}>
						<Typography
							as="h3"
							size="s"
							weight="bold"
							family="red-hat-text"
							className={classes("-social-media-heading")}
						>
							Let&apos;s Get Connects
						</Typography>
						<div className={classes("-social-media-contents")}>
							<div className={classes("-icon-text-container")}>
								<FaLinkedinIn />
								<Typography
									as="div"
									size="xs"
									family="red-hat-text"
									weight="semi-bold"
									className={classes("-social-media-items")}
								>
									<a href="">LinkedIn</a>
								</Typography>
							</div>
							<div className={classes("-icon-text-container")}>
								<FaTwitter />
								<Typography
									as="div"
									family="red-hat-text"
									size="xs"
									weight="semi-bold"
									className={classes("-social-media-items")}
								>
									<a href="">Twitter</a>
								</Typography>
							</div>
							<div className={classes("-icon-text-container")}>
								<FaYoutube />
								<Typography
									as="div"
									size="xs"
									family="red-hat-text"
									weight="semi-bold"
									className={classes("-social-media-items")}
								>
									<a href="">Youtube</a>
								</Typography>
							</div>

							<div className={classes("-icon-text-container")}>
								<FaInstagram />
								<Typography
									as="div"
									family="red-hat-text"
									size="xs"
									weight="semi-bold"
									className={classes("-social-media-items")}
								>
									<a href="">Instagram</a>
								</Typography>
							</div>
						</div>
					</div>
				</div>

				<hr className={classes("-bottom-hr")} />

				<div className={classes("-copyright-developed")}>
					<div className={classes("-copyright-details")}>
						<Typography
							family="red-hat-display"
							weight="bold"
							size="sm"
							className={classes("-copyright-details-text")}
						>
							COPYRIGHT © 2023 GrowthRocket. ALL RIGHTS RESERVED.
						</Typography>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
