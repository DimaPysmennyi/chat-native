import { TouchableOpacity, Text, TextStyle, TextProps } from "react-native";
import { IButtonProps } from "./button.types";
import { styles } from "./button.styles";

export function Button(props: IButtonProps) {
	const {
		label,
		disabled,
		style,
		fontSize,
		textColor,
		...touchableOpacityProps
	} = props;
	return (
		<TouchableOpacity
			{...touchableOpacityProps}
			disabled={disabled}
			style={[disabled ? styles.disabled : null, styles.button, style]}
		>
			{textColor ? (
				<Text
					style={[
						styles.text,
						{ fontSize: fontSize, color: textColor },
					]}
				>
					{label}
				</Text>
			) : (
				<Text
					style={[
						styles.text,
						{ fontSize: fontSize, color: "white" },
					]}
				>
					{label}
				</Text>
			)}
		</TouchableOpacity>
	);
}
