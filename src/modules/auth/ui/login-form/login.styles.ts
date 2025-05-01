import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    container: {
        // flex: 2,
        alignItems:"center",
        justifyContent:"center",
        gap: 30
    },

    form: {
        gap: 15,
    },

    buttonBlock: {
        alignItems: "center",
    },
    text: {
        color: COLORS.white, 
        fontSize: 36
    }
})