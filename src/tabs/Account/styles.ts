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
    paddingTop:40,
    paddingLeft: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    marginTop:10

},
itemText:{
  color: "#f58634",
  fontStyle: "normal",
  fontWeight: "bold",
  fontSize: 20,
},
divider:{
  paddingLeft:10,
  paddingRight:10,

}
});

export default styles;