import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    gen:{
        justifyContent:"center",
        alignItems:"center",
        width:"auto",
        height:600,
        flex:1
    },
crossblock:{width:343},
mainblock:{
    backgroundColor: "white",
    borderRadius: 20,
    flexDirection:"column",
    paddingVertical:20,
    alignItems:"center",
},
cross: {
    alignItems: "flex-end",
},
titelblock: {
    alignItems: "center",
    height:59,
    width:"auto",
    marginTop:20,
    
    
},
title: {
    fontSize: 34,
    color: "#070A1C",
    fontFamily:"GTWalsheimPro-Medium"
    
},
searchbar: {
    justifyContent: "center",
},
input: {
    height: 40,
    fontSize: 16,
},
selected: {
    marginVertical: 10,
    fontSize: 16,
    color: "#81818D",
    paddingHorizontal:10,
    fontFamily:"GTWalsheimPro-Regular"
},
friendList: {
    paddingBottom: 10,
},
friendItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
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
buttonblock:{width:343},
buttons: {
    flexDirection: "row",
    justifyContent:"flex-end",
    marginTop: 20,
    gap:20,
    marginRight:10
    
},
button1:{
    width:102,
    height:40,
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:1234,
    borderColor:"#543C52",
    alignItems:"center",
    justifyContent:"center",
    fontFamily:"GTWalsheimPro-Medium"
},
button2:{
    width:61,
    height:40,
    backgroundColor:"#543C52",
    borderWidth:1,
    borderRadius:1234,
    borderColor:"#543C52",
    alignItems:"center",
    justifyContent:"center",
    fontFamily:"GTWalsheimPro-Medium"
},
textbutton1:{
    color:"#543C52",
    fontWeight:500
},
textbutton2:{
    color:"white",
    fontWeight:500
},
listblock:{
    height:300
},
listobjects:{
    paddingHorizontal:20
}
})
