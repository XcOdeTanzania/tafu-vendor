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
  buttonGroup: {
    backgroundColor: "#f58634",
    borderRadius: 15,
  },
  dialogContent: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",

  },
  dialogConfirmContent: {
    padding: 10,
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#F58634"

  },
  contentHeader: {
    fontSize: 28
  },
  dialogContainer: {
    // paddingTop: 8,
    // paddingBottom: 8
  },
  QRCodeContainer: {
    marginTop: 8,
    marginBottom: 8
  },

  contentConfirmHeader: {
    fontSize: 28,
    color: 'white',
    margin:10
    
  },
  dialogConfirmContainer: {
    color: 'white',
    marginBottom:20,
    textAlign:'center'
  },
});

export default styles;