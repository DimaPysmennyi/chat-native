import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
		paddingTop: 24,
        paddingHorizontal: 16,
        paddingBottom: 44,
		minHeight: 600,
        width: '100%'
	},
	modalTitle: {
		fontSize: 18,
		fontWeight: "600",
		marginBottom: 16,
		color: "#000",
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
	},
	publishText: {
		color: "#fff",
		marginRight: 6,
		fontWeight: "600",
	},
    closeButton: {
        position: 'absolute',
        top: 20,
        right: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
