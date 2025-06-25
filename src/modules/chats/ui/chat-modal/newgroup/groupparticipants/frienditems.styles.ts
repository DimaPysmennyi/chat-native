import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
friendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
},
friendInfo: {
    flexDirection: "row",
    alignItems: "center",
},
avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 12,
    backgroundColor: "#ccc",
},
friendName: {
    fontSize: 16,
    color: "#070A1C",
    fontFamily:"GTWalsheimPro-Medium",
    fontWeight:500
},
checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#55225F",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
},
checkboxSelected: {
    backgroundColor: "white",
},
checkmark: {
    color: "black",
    fontSize: 14,
    fontWeight: "bold",
},
});