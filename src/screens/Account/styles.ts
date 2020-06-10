import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  separator: {
    height: 1,
    flex: 1,
    backgroundColor: "gray"
  },
  header: {
    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    lineHeight: 18,
    paddingTop: 40,
    paddingLeft: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    marginTop: 10

  },
  column: {
    flexDirection: "column",
    padding: 10,
    justifyContent: "space-between",
    marginTop: 10,


  },
  itemText: {
    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
  },
  itemTextBranch: {
    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
  },
  divider: {
    paddingLeft: 10,
    paddingRight: 10,

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


  },
  subtitle: {
    fontSize: 15,
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
  },
  buttonAdd: {
    backgroundColor: "#f58634",
    borderRadius: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    paddingTop: 5,
    lineHeight: 14
  },
  rowBranch: {
    flexDirection: "row",

    paddingBottom: 5,
    justifyContent: 'flex-start',


  },


  textInputPopup: {
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 8,
    padding: 10,
    width: "100%",
    color: "white",
    borderColor: "#fff",
  },
  dialogHeader: {
    paddingTop: 20,
  },
  dialogHeaderTitle: {
    fontSize: 24,
    lineHeight: 28,
    textAlign: "center",
    fontWeight: "bold",
    color: "white"
  },
  formGroup: {
    marginTop: 10,
  },
  dialogFooterButton: {
    borderRadius: 20,
    color: "white",
    borderColor: "#fff",
  },
  dialogButtonfonts: {
    color: "#fff",
    fontSize: 14,
  }
});

export default styles;