// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View } from "react-native";
import { Button, Icon } from "react-native-elements";


class SplashScreen extends Component {

  render() {

    return (
      <View style={[styles.center, styles.title]}>
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default SplashScreen;