import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const styles = StyleSheet.create({
	button: {
		width: 220,
		height: 50,
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: COLORS.pinkPrimary,
	},
	disabled: {
		borderWidth: 2,
		borderColor: COLORS.pinkSecondary,
		opacity: 0.5,
	},
	text: {
		color: COLORS.white,
		fontSize: 20
	}
});