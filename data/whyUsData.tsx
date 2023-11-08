import { IWhyUsDataType } from "@/types/WhyUs";
import card1Img from "@/public/images/card1-img.svg";
import card2Img from "@/public/images/card2-img.svg";
import card3Img from "@/public/images/card3-img.svg";
import card4Img from "@/public/images/card4-img.svg";
import card5Img from "@/public/images/card5-img.svg";

const whyUsData: IWhyUsDataType[] = [
	{
		topImg: card1Img,
		heading: "Hands-On Practice with Cutting-Edge AI",
		desc: "Get access to exclusive industry tools and datasets to build your own large language models. Our project-based approach helps you gain practical experience through implementing models from research papers.",
	},
	{
		topImg: card2Img,
		heading: "Guidance from AI Experts",
		desc: "Our instructors are active AI/ML researchers and engineers from top companies. They provide mentorship and tailored feedback to help you master complex concepts and the latest advancements like massive language models.",
	},
	{
		topImg: card3Img,
		heading: "Join the AI Revolution",
		desc: "Don't just learn about large language models - train them yourself. Gain expertise in the futuristic AI technologies that are shaping the world. Enroll today and unleash your potential in this exciting field!",
	},
	{
		topImg: card4Img,
		heading: "Prep for an AI Career",
		desc: "We partner with AI labs, research groups, and tech leaders hiring for AI roles. Our career coaching, resume help, and exclusive hiring network will equip you to land a job in AI/ML.",
	},
	{
		topImg: card5Img,
		heading: "Flexible, Self-Paced Learning",
		desc: "With our online platform, you can learn AI skills on your schedule. Self-paced courses and flexible access mean you can level up your expertise anytime, anywhere while keeping your life on track.",
	},
];

export default whyUsData;
