export interface ICreatePost {
	title: string;
	topic?: string;
	tags?: string[];
	content: string;
	links?: string;
	images?: string[];
}

export interface ICreatePostModalProps {
	isVisible: boolean;
	onClose: () => void;
}
