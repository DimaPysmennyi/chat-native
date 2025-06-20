import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    contactsView: {
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
        gap: 8
    },
    titleText: {
        fontFamily: "GTWalsheimPro-Regular",
        fontSize: 20,
        color: COLORS.blueOpacity
    },
    contactCard: {
        flexDirection: "row",
        gap: 16,
        width: "100%",
        height: 46
    },
    contactText: {
        fontFamily: "GTWalsheimPro-Regular",
        fontSize: 16,
        color: COLORS.blueOpacity
    }
})