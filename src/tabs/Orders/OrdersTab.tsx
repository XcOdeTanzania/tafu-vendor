// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from "react-native";
import OrderItem  from '../../components/items/order/OrderItem';






class OrdersTab extends Component {

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }]}
          renderItem={({ item }) => (
            <OrderItem></OrderItem>
          )}
        />
      </SafeAreaView>
    );
  }
}

export default OrdersTab;

