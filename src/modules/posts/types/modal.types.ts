import { TouchableOpacityProps } from "react-native";
import { IPost } from "./post.types";

export interface IModalProps {
	isVisible: boolean;
	onClose: () => void;
	post?: IPost;
}

export interface ITagItemProps extends TouchableOpacityProps{
	text: string
	textColor: string
}