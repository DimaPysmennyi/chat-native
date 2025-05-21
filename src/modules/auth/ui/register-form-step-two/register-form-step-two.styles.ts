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
    },
    verifinfoblock:{
        backgroundColor:COLORS.white,
        width: 343,
        height:421,
        flexDirection:"column"

    },
    articleText:{
        fontSize: 24,
        fontWeight:500,
    },
    articleTextblock:{
        alignItems:"center",
        justifyContent:"center"
    },
    emailTextblock:{
        alignItems:"center",
        justifyContent:"center"
    },
    emailText:{
        fontSize:14,
        fontWeight:500
    },
    additionText:{
        fontSize:16,
        fontWeight:400
    }



})