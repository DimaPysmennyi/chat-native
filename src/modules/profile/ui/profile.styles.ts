import { StyleSheet } from "react-native";
import { COLORS } from "../../../shared/ui/colors";

export const styles = StyleSheet.create({
	userInfo: {
		paddingVertical: 16,
		gap: 16,
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: COLORS.white,
		borderColor: COLORS.blueOpacity,
		alignItems: "center",
		justifyContent: "center",
		height: 327,
	},
	userTitle: {
		fontSize: 24,
		fontFamily: "GTWalsheimPro-Bold",
		color: COLORS.blue,
	},

	username: {
		fontSize: 16,
		fontFamily: "GTWalsheimPro-Medium",
		color: COLORS.blue,
	},

	infoRow: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		// height: 48
	},
	infoBlock: {
		gap: 7,
		flex: 3,
		alignItems: "center",
		borderRightWidth: 1,
		borderColor: COLORS.blueOpacity20,
		height: 48,
	},
	infoBlockTitle: {
		fontFamily: "GTWalsheimPro-Bold",
		color: COLORS.blue,
		fontSize: 20,
	},
	infoBlockSubtitle: {
		fontFamily: "GTWalsheimPro-Regular",
		color: COLORS.blueOpacity,
		fontSize: 16,
	},
	buttons: {
		flexDirection: "row",
		gap: 16,
        height: 40
	},
});
