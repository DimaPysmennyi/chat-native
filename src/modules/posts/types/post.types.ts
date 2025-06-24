import { Dispatch } from "react";
import { AvatarName } from "../../../../assets/avatars/avatars";

export interface IPostProps {
	avatar: AvatarName;
	username: string;
	id: number;
    title: string;
	text: string;
	hashtags?: string;
	images?: string;
	likes: number;
	views: number;
	userId: number;
}

export interface ICreatePost {
	title: string;
	topic?: string;
	tags?: string[];
	content: string;
	links?: string;
	images?: string[];
	userId: number;
}

export interface IImage{
    id: number;
    filename: string;
    file: string;
    uploadedAt: Date;
    postId: number;
    albumId: number;
}

export interface IPost {
	id: number;
	title: string;
	topic?: string;
	tags?: string;
	content: string;
	links?: string;
	images?: IImage[];
	userId: number;
	likes: number;
	views: number;
}
