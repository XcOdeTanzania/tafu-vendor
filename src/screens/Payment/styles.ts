
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemText: {
    color: "#f58634",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: 'center'
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
  dialogContentText: {
    fontSize: 15,
    lineHeight: 28,
    fontWeight: "bold",
    textAlign: "center",
    
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
  },
  button: {
    backgroundColor: "#f58634",
    borderRadius: 15,
    paddingLeft: 25,
    paddingRight: 25,
    paddingBottom: 5,
    paddingTop: 5,
    borderColor:'white'
    
  },
  fonts: {
    fontSize: 20,
    color:'white'

  },
});

export default styles;