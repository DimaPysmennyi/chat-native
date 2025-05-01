import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

export const styles = StyleSheet.create({
	button: {
		width: 220,
		height: 50,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.greenSecondary,
	},
	disabled: {
		borderWidth: 2,
		borderColor: COLORS.greenSecondary,
		opacity: 0.5,
	},
});