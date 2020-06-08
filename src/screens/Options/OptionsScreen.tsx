import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";

class OptionsScreen extends Component {
  static navigationOptions = {
    headerTitle: "Options"
  };

  render() {
    return (
      <View >
        <Text>This is the OptionsScreen.</Text>
      </View>
    );
  }
}

export default OptionsScreen;