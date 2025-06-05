import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const styles = StyleSheet.create({
	button: {
		width: 311,
		height: 52,
		borderRadius: 1234,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#543C52",
	},
	disabled: {
		borderWidth: 2,
		borderColor: COLORS.blueOpacity,
		opacity: 0.5,
	},
	text: {
		color: COLORS.white,
		fontSize: 16,
		fontFamily: "GTWalsheimPro-Medium"
	}
});