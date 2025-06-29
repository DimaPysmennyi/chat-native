import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
	messagesView: {
		width: "100%",
		// height: 555,
		padding: 16,
		gap: 8,
		borderTopWidth: 1,
		borderLeftWidth: 1,
		borderRightWidth: 1,
		borderColor: COLORS.blueOpacity20,
		borderRadius: 10,
		flexDirection: 'row',
		backgroundColor: "white",
		alignItems: "center",
		marginTop: 8,
	},
	titleView: {
		width: "100%",
		flexDirection: "row",
		gap: 8,
	},
	titleText: {
		fontFamily: "GTWalsheimPro-Medium",
		fontSize: 20,
		color: COLORS.blueOpacity,
	},
    message: {
        // flex: 1,
        backgroundColor: "white",
        paddingVertical: 8,
        paddingHorizontal: 16,
		flexDirection: "row",
		alignItems: "center",
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
        justifyContent: "space-between",
		// alignItems: "flex-end"
    }
});
