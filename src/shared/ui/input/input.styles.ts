import { StyleSheet } from "react-native"
import { COLORS } from '../colors'

export const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
    },
    label: {
        fontSize: 20,
        color: '#070A1C',
        marginBottom: 5,
    },

    input: {
        width: 300,
        height: 50,
        borderRadius: 5,
        fontSize: 20,
        backgroundColor: COLORS.greyPrimary,
        color: COLORS.white,
        paddingHorizontal: 20,
        paddingVertical: 10,
    
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        flexShrink: 1,
    },
    errorBlock:{
        gap: 2,
        flexDirection:"row",
    }
});