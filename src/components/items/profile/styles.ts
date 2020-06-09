import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        paddingTop: 80,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        height: "30%",
        justifyContent: "space-between"

    },

    body: {
        flexDirection: "column",
        justifyContent: "space-between",
        marginLeft: 8,

    },
    title: {

        // fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 30,
        lineHeight: 18,
        paddingTop: 10,

    },
    subtitle: {
        fontSize: 13,
        color: '#7E7D7B'
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
        backgroundColor: "#f58634",
        borderRadius: 10,
        padding: 0,
        lineHeight: 14,


    },
    fonts: {
        fontSize: 14,
    }
    // body: {

    // },
    // action: {

    // },
    // item: {
    //     backgroundColor: '#f9c2ff',
    //     padding: 20,
    //     marginVertical: 8,
    //     marginHorizontal: 16,
    // },
    // title: {
    //     fontSize: 32,
    // },

});

export default styles;