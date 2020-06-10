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
    paddingLeft: 10,
    paddingRight: 10,

  },

  button: {
    borderColor: "#f58634",
    borderRadius: 10,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    paddingTop: 5,
  
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
  cardHearderText: {
   
    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 20,
  },
  fonts: {
    color: "#f58634",
    fontSize: 20,
  }
});

export default styles;