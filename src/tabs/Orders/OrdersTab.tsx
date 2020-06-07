// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from "react-native";
import { Button, Icon } from "react-native-elements";
import { ListItem } from 'react-native-elements';




class OrdersTab extends Component {

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <View>
      
    </View>
  );

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }, { key: 'a' }, { key: 'b' }]}
          renderItem={this.renderItem}
        />
      </SafeAreaView>
    );
  }
}

export default OrdersTab;