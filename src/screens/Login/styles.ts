import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f58634',
  },
  placeholder: {
    fontSize: 18,
    color: "white"
  },
  errorMessage: {
    marginTop: 40,
  },
  input: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white',
    marginBottom: 2,
    borderRadius: 2,
    paddingLeft: 10,
    paddingVertical: 5,
    width: '100%',
  },
  header: {
    color: "white",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: 30
  },
  button: {
    backgroundColor: "#f58634",
    margin: 10, 
    marginTop: 50

  },
  fonts: {
    fontSize: 20,
    color: "white"
  },
  label: {
    color: "white"
  }


});

export default styles;