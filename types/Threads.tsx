import { StaticImageData } from "next/image";

export interface IThreadsDataType {
	avatar: StaticImageData;
	name: string;
	handle: string;
	date: string;
	title: string;
	desc: string;
	hashtag: string;
	imgPresent: boolean;
	likes: string;
	comments: string;
	height: string;
	color: string;
	border: string;
	background: string;
	boxShadow: string;
}
