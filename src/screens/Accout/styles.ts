import { StyleSheet } from "react-native";

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
    paddingTop:2
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
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:5,
    justifyContent: 'flex-start',
   

  },
});

export default styles;