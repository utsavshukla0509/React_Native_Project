import {StyleSheet, Platform} from "react-native";

export default StyleSheet.create({
    container: {
      backgroundColor: "#fff",
      paddingTop: Platform.OS == "android" ? "10%" : "0%",
      height:710,
    },
    title: {
      display: "flex",
      fontWeight: "bold",
      color: "#696969",
      fontSize: 30,
      marginLeft: 20,
      paddingBottom: 15,
    },
    button:{
      fontSize:30,
      color:"#696969",
    },
    buttonView:{
      width:50,
      marginLeft:150,
      paddingLeft:15,
    },
    setHeading:{
      flexDirection:"row",
      
    },
    line:{
      borderTopColor: "#e8eaed",
      borderTopWidth: 1,
      marginLeft: 15,
      marginRight: 15,
      paddingBottom:20,
    },
    itemView:{
        fontSize:25,
        color: "rgba(120,120,120,1)",
    },
    alignItems1:{
        alignItems:"center",
        marginLeft:20,
        marginRight:20,
        // borderColor: "black",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom:20, 

    },
    alignItems2: {
        flexDirection:"row",
        justifyContent:"space-between",
        marginLeft:20,
        marginRight:20,
        borderColor: "rgba(223,225,229,0)",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom:20,
        display: "flex",
        elevation: 10,
        backgroundColor: "#fff",
      },
      alignItems3: {
        marginLeft:20,
        height:100,
        marginRight:20,
        borderColor: "rgba(223,225,229,0)",
        borderWidth: 1,
        borderRadius: 20,
        marginBottom:20,
        display: "flex",
        elevation: 10,
        backgroundColor: "#fff",
      },
      deleteIcon:{
        paddingTop: 6,
        paddingLeft: 10,
        paddingRight:12,
        fontSize: 21,
        fontWeight: "bold",
      },
      editIcon:{
        paddingTop: 6,
        paddingRight: 10,
        paddingLeft:15,
        fontSize: 21,
        fontWeight: "bold",
      },
      input:{
        borderWidth:1,
        marginLeft:50,
        height:40,
        width:220,
        borderRadius:10,
        flexGrow: 20,
        color: "rgba(120,120,120,1)",
        fontSize: 15,
      },
      backIcon:{
        height:30,
        marginLeft:10,
        paddingLeft:10,
        paddingTop:5,
        paddingRight:10,
        fontSize: 25,
        width:40,
      },
      customButton:{
        borderWidth:1,
        height:20,
        width:40,
        marginLeft:140,
        marginTop:5,
        borderRadius:5,
      },
      textView:{
        paddingLeft:80,
        paddingRight:80,
      },
      
      
  });