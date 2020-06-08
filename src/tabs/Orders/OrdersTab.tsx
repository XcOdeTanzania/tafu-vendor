// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from "react-native";
import OrderItem from '../../components/items/order/OrderItem';






class OrdersTab extends Component {

  listData = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }];

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          margin: "10px",
        }}
      />
    );
  };

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          ItemSeparatorComponent={this.renderSeparator}
          data={this.listData}
          renderItem={({ item }) => (
            <OrderItem></OrderItem>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default OrdersTab;

