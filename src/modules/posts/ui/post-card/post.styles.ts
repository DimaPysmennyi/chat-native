import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	postContainer: {
		backgroundColor: "#fff",
		borderRadius: 10,
		borderColor: "#CDCED2",
		borderWidth: 1,
	},
	postHeader: {
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderBottomWidth: 1,
		borderBottomColor: "#CDCED2",
		minHeight: 78,
	},
	userInfo: {
		flexDirection: "row",
		alignItems: "center",
	},
	avatar: {
		width: 46,
		height: 46,
		borderRadius: 23,
		marginRight: 10,
	},
	username: {
		fontFamily: "GTWalsheimPro-Regular",
		fontWeight: "bold",
		fontSize: 14,
		color: "#070A1C",
	},
	postBody: {
		marginTop: 16,
		paddingHorizontal: 16,
		gap: 16,
	},
	text: {
		fontFamily: "GTWalsheimPro-Regular",
		fontSize: 14,
		color: "#070A1C",
	},
	hashtags: {
		fontFamily: "GTWalsheimPro-Regular",
		color: "#543C52",
		fontSize: 14,
	},
	postFooter: {
		flexDirection: "row",
		gap: 24,
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	footerText: {
		fontSize: 14,
		color: "#070A1C",
		fontFamily: "GTWalsheimPro-Regular"
	},
	imageGrid: {
		gap: 10,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	imageHalf: {
		width: "48%",
		aspectRatio: 3 / 4,
		borderRadius: 12,
	},
	imageThird: {
		width: "31%",
		aspectRatio: 3 / 4,
		borderRadius: 12,
	},
});
