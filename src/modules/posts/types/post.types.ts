import { AvatarName } from "../../../../assets/avatars/avatars";

export interface IPostProps {
	avatar: AvatarName;
	username: string;
	headerImage?: string;
    title: string;
	text: string;
	hashtags?: string;
	images?: string;
	likes: number;
	views: number;
}

export interface ICreatePost {
	title: string;
	topic?: string;
	tags?: string[];
	content: string;
	links?: string;
	images?: string[];
}

export interface IPost {
	id: number;
	title: string;
	topic?: string;
	tags?: string;
	content: string;
	links?: string;
	images?: string;
	userId: string;
	likes: number;
	views: number;
}
