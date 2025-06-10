import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    underlinedVariant: {
        borderBottomWidth: 2,
        borderColor: COLORS.purple,
    },
    headerView: {
        flex: 1,
        flexDirection: "row",
        gap: 16,
        paddingHorizontal: 16,
        paddingVertical: 23
    }
})