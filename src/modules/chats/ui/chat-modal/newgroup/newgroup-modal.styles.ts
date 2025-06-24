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
mainblock: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    width:353,
    height:600,
    
},
cross: {
    alignItems: "flex-end",
},
titelblock: {
    alignItems: "center",
    height:39,
    width:"auto",
},
title: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000",
    
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
    color: "#333",
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

buttons: {
    flexDirection: "row",
    alignItems:"flex-end",
    marginTop: 20,
},
button1:{
    width:102,
    height:40,
    backgroundColor:"white",
    borderWidth:1,
    borderRadius:1234,
    borderColor:"#543C52",
    alignItems:"center",
    justifyContent:"center"
},
button2:{
    width:61,
    height:40,
    backgroundColor:"#543C52",
    borderWidth:1,
    borderRadius:1234,
    borderColor:"#543C52",
    alignItems:"center",
    justifyContent:"center"
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
}

})
