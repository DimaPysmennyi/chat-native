import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        backgroundColor: "#fff",
        width:375,
        height:60,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between",
        padding:15
    },
    buttons:{
        flexDirection: "row",
        gap:5
    }
});