// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-elements";


class LoginScreen extends Component {


  render() {
    return (
      <View style={styles.container}>
        <Text>This is the LoginScreen.</Text>
        <Button
          title='forgottenPassword'
          onPress={() => { }
          }
        />
        <Button
          title='loginTitle'
          onPress={() => { }}
        />
      </View>
    );
  }
}

export default LoginScreen;