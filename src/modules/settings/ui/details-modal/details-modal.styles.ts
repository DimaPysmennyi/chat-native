import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: "#FFFFFF",
		borderRadius: 20,
		paddingTop: 24,
		paddingHorizontal: 16,
		paddingBottom: 44,
		height: 467,
	},
	
	closeButtonBox: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end"
	},
	inputs: {
		paddingVertical: 24,
		gap: 16,
		justifyContent: "center",
		alignItems: "center"
	},
	titleBox: {
		flex: 1,
		justifyContent: "center",
		flexDirection:"row",
		height: 27
	},
	modalTitle: {
		fontSize: 24,
		color: "#000",
		fontFamily: "GTWalsheimPro-Medium",
	},
	buttonBox: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-end"
	}
});
