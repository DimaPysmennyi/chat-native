import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

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
		fontFamily: "GTWalsheimPro-Medium",
	},
	actions: {
		flexDirection: "row",
		justifyContent: "flex-end",
		alignItems: "center",
		gap: 10,
	},
	publishButton: {
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: "#543C52",
		borderRadius: 20,
		paddingVertical: 8,
		paddingHorizontal: 16,
		fontFamily: "GTWalsheimPro-Regular",
	},
	publishText: {
		fontFamily: "GTWalsheimPro-Regular",
		color: "#fff",
		marginRight: 6,
		fontWeight: "600",
	},
	closeButton: {
		position: "absolute",
		top: 20,
		right: 15,
	},
	inputs: {
		gap: 16,
		paddingVertical: 24,
	},
	tagsContainer: {
		width: "100%",
		flexDirection: "row",
		flexWrap: "wrap",
		gap: 10,
		marginLeft: 5,
	},
	tagButton: {
		backgroundColor: COLORS.purpleOpacity,
		height: "auto",
		width: "auto",
		padding: 6,
		borderRadius: 6,
	},
	tagText: {
		// color: COLORS.purpleOpacity,
		fontSize: 14,
		fontFamily: "GTWalsheimPro-Regular",
	},
	addButton: {
		borderColor: COLORS.purple,
		height: 25,
		width: 25,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 2,
		borderRadius: 25,
		
	},
	selectedTagButton: {
		backgroundColor: COLORS.purple,
		height: "auto",
		width: "auto",
		padding: 6,
		borderRadius: 6,
		color: COLORS.purpleOpacity
	},
	closeTagButton: {
		position: 'absolute',
		right: -10
	}
});