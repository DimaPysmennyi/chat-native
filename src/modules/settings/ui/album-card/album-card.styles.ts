import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
	albumCard: {
		height: "auto",
		borderRadius: 10,
		borderWidth: 1,
		padding: 16,
		gap: 16,
		backgroundColor: COLORS.white,
		borderColor: COLORS.blueOpacity20,
	},
	nameBlock: {
		alignItems: "center",
		height: 40,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	infoBlock: {
		flexDirection: "row",
		gap: 16,
		alignItems: "center",
		borderColor: COLORS.blueOpacity20,
		borderBottomWidth: 1,
		paddingBottom: 16,
	},
	addImage: {
		width: 165,
		height: 165,
		borderRadius: 10,
		borderWidth: 1,
		backgroundColor: COLORS.white,
		borderColor: COLORS.blueOpacity,
		alignItems: "center",
		justifyContent: "center",
		borderStyle: "dashed",
	},
	imagesContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
        gap: 16
	},
	image: {
		width: 165,
		height: 165,
        borderRadius: 10
	},
    emptyImagesContainer: {
        flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "flex-start",
        gap: 16
    }
});
