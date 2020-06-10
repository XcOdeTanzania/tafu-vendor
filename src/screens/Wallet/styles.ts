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
    fontSize: 30
  },

  row: {
    flexDirection: "row",
    paddingRight: 10,
    justifyContent: "space-between",
    paddingTop: 40,
  },
  column: {
    flexDirection: "column",

  },
  primaryColorBackground: {
    backgroundColor: "#f58634",
  },
  secondaryColorBackground: {
    backgroundColor: "#746A62",
    alignItems: 'flex-start'
  },
  tertiaryColorBackground: {
    backgroundColor: "#266EFA",
    alignItems: 'flex-end'
  },


  container2: {
    padding: 15,
    width: 180,
    height: 100,
    borderRadius: 10,
    margin: 2,



  },

  containerRow: {
    flexDirection: "row",
    paddingRight: 10,
    margin: 10,
    justifyContent: "space-between",
  },

  rowHeader: {
    flexDirection: "row",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 30,
    justifyContent: "space-between",

  },
  button: {
    backgroundColor: "#f58634",
    borderRadius: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    paddingTop: 5,
  },

  buttonGroup: {
    backgroundColor: "#f58634",
    borderRadius: 15,
  },
  fonts: {
    fontSize: 20,

  },
  fontsSmall: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'

  }
  ,
  fontsLarge: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'

  }
});

export default styles;