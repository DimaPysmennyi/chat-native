import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        // width: 373
        height: 60,
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