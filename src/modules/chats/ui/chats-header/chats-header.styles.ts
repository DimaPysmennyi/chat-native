import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: 54,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 16,
    },
    button: {
        height: 54,
        paddingHorizontal: 8,
        paddingBottom: 4,
        paddingTop: 8,
        gap: 6
    },
    buttonBorder: {
        borderTopWidth: 2,
        borderColor: COLORS.purple
    },
    buttonText: {
        fontSize: 14,
        color: COLORS.blue,
        fontFamily: "GTWalsheimPro-Regular"
    }
})