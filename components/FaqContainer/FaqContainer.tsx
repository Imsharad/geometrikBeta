import React, { useState } from "react";
import Typography from "@/library/Typography";
import faqs from "@/data/faqData";
import { PiCaretDown } from "react-icons/pi";
import { stylesConfig } from "@/utils/functions";
import styles from "./styles.module.scss";

const classes = stylesConfig(styles, "home-faqs");

const FaqContainer: React.FC = () => {
	const [active, setActive] = useState(-1);
	return (
		<section className={classes("")} id="faqs">
			<Typography
				weight="bold"
				size="sm"
				as="h2"
				className={classes("-title")}
			>
				Frequently Asked Questions
			</Typography>
			<div className={classes("-container")}>
				{faqs?.map((faq, index) => (
					<div
						className={classes("-faq", {
							"-faq--active": active === index,
						})}
						key={index}
					>
						<Typography
							weight="bold"
							size="xs"
							className={classes("-faq-title")}
							onClick={() => {
								if (active === index) {
									setActive(-1);
								} else {
									setActive(index);
								}
							}}
						>
							{faq?.question}
							<PiCaretDown />
						</Typography>
						<Typography
							weight="regular"
							size="xs"
							className={classes("-faq-answer")}
						>
							{faq?.answer}
						</Typography>
					</div>
				))}
			</div>
		</section>
	);
};

export default FaqContainer;
