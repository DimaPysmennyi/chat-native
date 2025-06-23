import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
	messagesView: {
		width: "100%",
		// height: 555,
		padding: 16,
		gap: 24,
		borderWidth: 1,
		borderColor: COLORS.blueOpacity20,
		borderRadius: 10,
	},
	titleView: {
		width: "100%",
		flexDirection: "row",
		gap: 8,
	},
	titleText: {
		fontFamily: "GTWalsheimPro-Regular",
		fontSize: 20,
		color: COLORS.blueOpacity,
	},
    message: {
        width: "100%",
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 16
    },
    chatImage: {
        width: 46,
        height: 46,
        borderRadius: 23
    },
    messageTitle: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
});
