import { StyleSheet } from "react-native"
import { COLORS } from "../../../../shared/ui/colors"

export const styles = StyleSheet.create({
    myPhotosContainer: {
        width: '100%',
        height: 288,
        borderRadius: 10,
        borderWidth: 1,
        padding: 16,
        gap: 16,
        backgroundColor: 'white',
        borderColor: '#CDCED2',
        marginTop: 5
    },
    topBlock: {
        height: 40,
        width:'100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 16,
        alignItems: "center"
    },
    topText: {
        fontFamily: "GTWalsheimPro-Medium",
        fontSize: 16,
        color: COLORS.blue,
    },
    topButton: {
        flexDirection: 'row',
        width: 131,
        height: 40,
        alignItems: 'center',
        borderRadius: 100,
        borderWidth: 1,
        padding: 10,
        gap: 10,
        borderColor: COLORS.purple,
        backgroundColor: COLORS.white,

    },
    topButtonText: {
        fontFamily: "GTWalsheimPro-Medium",
        fontSize: 14,
        color: COLORS.purple,
    }
})