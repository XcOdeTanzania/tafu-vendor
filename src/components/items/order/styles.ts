import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        padding: 10,
    },
    column: {
        justifyContent: "space-between",
    },
    image: {
        borderRadius: 10,
        overflow: "hidden",
        width: 70,
        height: 59
    },
    body: {
        flex: 1,
        marginLeft: 8
    },
    title: {
        color: "#f58634",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 18,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 13
    },
    price: {
        color: "#f58634",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 18,
    },
    button: {
        backgroundColor: "#f58634",
        borderRadius: 10,
        padding: 0,
        lineHeight: 14
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