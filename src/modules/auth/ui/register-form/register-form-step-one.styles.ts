import { StyleSheet } from "react-native"
import { COLORS } from "../../../../shared/ui/colors"

export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: COLORS.white, 
        fontSize: 36,
        fontFamily: "GTWalsheimPro-Regular"
    },
    inputs: {
        gap: 16
    },
    buttonBox: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
    welcometext: {
        color: COLORS.blue, 
        fontSize: 24,
        fontWeight: 500,
        fontFamily: "GTWalsheimPro-Regular"
    },
    welcometextblock:{
        alignItems:"center",
        justifyContent:"center",
        gap:14,
        paddingTop:14,
        paddingBottom:10
    },

    inforegblock:{
        backgroundColor:COLORS.white, 
        width: 343,
        height: 504,
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        paddingVertical: 44,
    },
    textblock:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "row",
        gap: 24,
    },
    
})