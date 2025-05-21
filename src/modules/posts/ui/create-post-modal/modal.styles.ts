import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
		paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 44,
		minHeight: 589,
        
	},
	modalTitle: {
		fontSize: 24,
		// fontWeight: "600",
		// marginBottom: 16,
		color: "#000",
		fontFamily: "GTWalsheimPro-Medium"
	},
	actions: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
        gap: 10
	},
	publishButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#543C52",
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 16,
		fontFamily: "GTWalsheimPro-Regular"
	},
	publishText: {
		fontFamily: "GTWalsheimPro-Regular",
		color: "#fff",
		marginRight: 6,
		fontWeight: "600",
	},
    closeButton: {
        position: 'absolute',
		width: 20,
		height: 20,
        top: 20,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
	inputs: {
		gap: 16,
		paddingVertical: 24
	}
});
