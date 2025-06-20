import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
	userMessageView: {
		width: "100%",
		minHeight: 42,
		justifyContent: "flex-end",
	},
	userMessage: {
		minHeight: 42,
		backgroundColor: COLORS.blueOpacity20,
		borderRadius: 6,
		flexDirection: "row",
		alignItems: "flex-end",
		padding: 10,
		gap: 10,
	},
	anotherUserMessageView: {
		width: "100%",
		minHeight: 62,
	},
	anotherUserMessage: {
		minHeight: 62,
		backgroundColor: COLORS.white,
		flexDirection: "row",
		alignItems: "flex-end",
		borderWidth: 1,
		borderColor: COLORS.purpleOpacity,
		borderRadius: 6,
		padding: 10,
		gap: 10,
	},
});
