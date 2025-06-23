import { StyleSheet } from "react-native"
import { COLORS } from "../../../../shared/ui/colors"

export const styles = StyleSheet.create({
        linktextnow:{
        borderBottomColor:"black",
        borderBottomWidth:2,
        fontSize:16,
        color:COLORS.black
    },
    linktextdef:{
        fontSize:16,
        color:COLORS.black
    },
    linkblok:{
        flexDirection:"row",
        height:100,
        paddingBlockStart:5
    },
    textblock:{ 
        width:"auto",
        gap:8
    }
})