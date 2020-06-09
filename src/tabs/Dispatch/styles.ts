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
  button: {
    backgroundColor: "#f58634",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    paddingTop: 5,
    lineHeight: 14
  },
  row: {
    flexDirection: "row",
    paddingRight: 10,
    justifyContent: "space-between",
      paddingTop: 40,
  },
  fonts: {
    fontSize: 20,

  }
});

export default styles;