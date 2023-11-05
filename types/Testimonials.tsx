import { StaticImageData } from "next/image";

export interface ITestimonialDataType {
	avatar: StaticImageData;
	name: string;
	designation: string;
	description: string;
	border: string;
	background: string;
	boxShadow: string;
}
