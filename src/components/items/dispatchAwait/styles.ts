import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        padding: 10,
        alignItems:'center'
    },
    column: {
        justifyContent: "space-between",
    },
    image: {
       paddingRight:10
    },
    body: {
        flex: 1,
        marginLeft: 8
    },
    title: {
        color: "#266efa",
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 18,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 13,
        color: "#f58634",
    },
    price: {
        color: "#f58634",
        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 18,
    },

 
    button: {
     
        borderColor:"#f58634",
        borderRadius: 10,
        paddingLeft: 25,
        paddingRight: 25,
        paddingBottom: 5,
        paddingTop: 5,
    },
    fonts: {
        fontSize: 18,
        color: "#f58634",
    }
   

});

export default styles;