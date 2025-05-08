import { COLORS } from "../../../../shared/ui/colors"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        gap: 30
    },
    text: {
        color: COLORS.white, 
        fontSize: 36
    },
    inputs: {
        gap: 5
    },
    buttonBox: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    }
})