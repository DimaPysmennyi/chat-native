import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    modalContainer: {
        width: 343,
        maxHeight: 140,
        borderRadius: 10,
        padding: 16,
        gap: 16,
        backgroundColor: COLORS.purpleOpacity
    },
    dotsIconView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    editButton: {
        paddingBottom: 16,
        borderBottomWidth: 1,
        borderColor: COLORS.blueOpacity,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    },
    deleteButton: {
        paddingTop: 16,
        flexDirection: "row",
        gap: 10,
        alignItems: "center"
    }
})