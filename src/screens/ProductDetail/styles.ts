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


  },
  cardRow: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "space-between",


  },
  cardRow1: {
    flexDirection: "row",
    paddingBottom: 10,
    paddingTop:10,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: "center",


  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonPadding: {
    paddingTop: 10,
  },
  itemText: {
    paddingTop: 10,
    paddingLeft: 10,
    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
  },
  divider: {
    paddingLeft: 20,
    paddingRight: 20,

  },
  image: {
    padding: 10,


  },
 
  card: {
    borderColor: "#f58634",
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cardBodyText: {
    padding: 10,
    fontStyle: "normal",
    fontSize: 15,
  },
  cardBodyText2: {
    padding: 10,
    fontStyle: "normal",
    fontSize: 15,
    color: "#7E7D7B",
  },
  cardBodyText3: {
    padding: 10,
    fontStyle: "normal",
    fontSize: 15,
    color: "#f58634",
  },
  cardHearderText: {

    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
  },
  fonts: {
    color: "#f58634",
    fontWeight: "bold",
    marginLeft:10,
    marginRight:10,
    marginBottom:5,
    marginTop:5,
    fontSize: 14,
  },
  button: {
    borderColor: "#f58634",
    borderRadius: 20,
    borderWidth: 3,
    padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 14,


  },
});

export default styles;