import { StyleSheet } from "react-native"
import { COLORS } from '../colors'

export const styles = StyleSheet.create({
    inputContainer: {
        padding: 5,
    },
    label: {
        fontSize: 16,
        color: "#070A1C",
        marginBottom: 5,
    },

    input: {
        width: 311,
        height: 42,
        borderRadius: 10,
        fontSize: 16,
        backgroundColor:"#FFFFFF",
        color:"#81818D",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderWidth:1,
        borderColor:"#CDCED2",
    
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