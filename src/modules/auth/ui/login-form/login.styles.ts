import { StyleSheet } from "react-native";
import { COLORS } from "../../../../shared/ui/colors";

export const styles = StyleSheet.create({
    container: {
        // flex: 2,
        alignItems:"center",
        justifyContent:"center",
        gap: 30
    },
    infoblock:{
        backgroundColor:COLORS.white, 
        width:343,
        height: 504,
        borderRadius:20,
        
    },
    textblock:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection: "row",
        gap: 24,
        paddingTop:44,
    },

    form: {
        gap: 15,
        justifyContent:"center",
        alignItems:"center"
    },

    buttonBlock: {
        alignItems: "center",
        paddingTop: 20
    },
    text: {
        color: COLORS.white, 
        fontSize: 36
    },
    welcometext:{
        color:" #070A1C", 
        fontSize: 24,
        fontWeight: 500,
    },
    welcometextblock:{
        alignItems:"center",
        justifyContent:"center",
        gap:24,
        paddingTop:44,
        paddingBottom:20
    },
})