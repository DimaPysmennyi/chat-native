import { COLORS } from "../../../../shared/ui/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: 343,
		height: 421,
		gap: 30,
        paddingHorizontal: 16,
        paddingVertical: 44,
		backgroundColor: COLORS.white,
		flexDirection: "column",
        borderRadius: 20
	},
	text: {
		color: COLORS.white,
		fontSize: 36,
	},
	inputs: {
		gap: 5,
	},
	buttonBox: {
		width: "100%",
		alignItems: "center",
		justifyContent: "center",
	},
	articleText: {
		fontSize: 24,
		fontWeight: 500,
        fontFamily: "GTWalsheimPro-Regular",
        color: COLORS.blue
	},
	articleTextblock: {
		alignItems: "center",
		justifyContent: "center",
	},
	emailTextblock: {
		alignItems: "center",
		justifyContent: "center",
	},
	emailText: {
		fontSize: 14,
		fontWeight: 500,
        fontFamily: "GTWalsheimPro-Regular",
        color: COLORS.blue,
        textAlign: "center"
	},
	additionText: {
		fontSize: 16,
		fontWeight: 400,
        fontFamily: "GTWalsheimPro-Regular",
	},
    backButton: {
        fontSize: 16,
        color: COLORS.purple,
        textAlign: "center",
        fontFamily: "GTWalsheimPro-Regular",
    },
    buttons: {
        gap: 16,
        justifyContent: "center",
        alignItems: "center"
    }
});
