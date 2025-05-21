import { StyleSheet } from "react-native";
import { COLORS } from "../colors";

export const styles = StyleSheet.create({
	inputContainer: {
		padding: 5,
	},
	label: {
		fontSize: 16,
		color: "#070A1C",
		marginBottom: 5,
		fontFamily: "GTWalsheimPro-Regular",
	},

	input: {
		width: 320,
		minHeight: 42,
		maxHeight: 42,
		// maxHeight: 140,
		borderRadius: 10,
		fontSize: 16,
		backgroundColor: "#FFFFFF",
		paddingHorizontal: 16,
		paddingVertical: 10,
		borderWidth: 1,
		borderColor: COLORS.blueOpacity,
		color: COLORS.blue,
		flexDirection: "row",
		fontFamily: "GTWalsheimPro-Regular",
	},
	errorText: {
		color: "red",
		fontSize: 14,
		flexShrink: 1,
		fontFamily: "GTWalsheimPro-Regular",
	},
	errorBlock: {
		gap: 2,
		flexDirection: "row",
	},
	inputBox: {
		height: 60,
		flexDirection: "row",
		alignItems: "center",
		paddingHorizontal: 10,
		borderRadius: 16,
		backgroundColor: "#FFFFFF",
		borderWidth: 1,
		borderColor: COLORS.black,
	},
});
