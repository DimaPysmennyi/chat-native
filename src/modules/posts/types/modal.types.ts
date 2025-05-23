import { TouchableOpacityProps } from "react-native";

export interface ICreatePostModalProps {
	isVisible: boolean;
	onClose: () => void;
}

export interface ITagItemProps extends TouchableOpacityProps{
	text: string
	textColor: string
}