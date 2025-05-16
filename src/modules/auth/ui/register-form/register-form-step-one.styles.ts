import { StyleSheet } from "react-native"
import { COLORS } from "../../../../shared/ui/colors"

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
    },
    welcometext:{
        color:" #070A1C", 
        fontSize: 24,
        fontWeight: 500,
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
        width:343,
        height: 504,
        borderRadius:20,},
    textblock:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "row",
        gap: 24,
        paddingTop:24,
    },
    
})