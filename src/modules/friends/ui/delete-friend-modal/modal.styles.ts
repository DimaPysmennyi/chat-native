import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    modalContainer: {
        height: 245,
        borderRadius: 20,
        paddingVertical: 44,
        paddingHorizontal: 16,
        gap: 36,
        backgroundColor: '#FFFFFF',
        alignItems: 'center'
    },
    topText: {
        fontFamily: 'GTWalsheimPro-Medium',
        fontSize: 24,
        color: COLORS.blue
    },
    middleText: {
        fontFamily: 'GTWalsheimPro-Regular',
        fontSize: 16,
        color: COLORS.blue
    },
    buttons: {
        flexDirection: 'row',
        gap: 16,
        justifyContent: 'center'
    },
    cancelButton: {
        width: 'auto',
        height: 40,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: COLORS.purple
        
    },
    confirmButton: {
        width: 'auto',
        height: 40,
        borderRadius: 100,
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 8,
    }
})