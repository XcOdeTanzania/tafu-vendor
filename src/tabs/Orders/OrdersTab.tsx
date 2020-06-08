// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Alert } from "react-native";
import OrderItem from '../../components/items/order/OrderItem';
import { SearchBar, Divider } from "react-native-elements";






class OrdersTab extends Component {

  listData = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }];

  searchFilterFunction = (text: string) => {
    const newData = this.listData.filter(item => {
      const itemData = `${item.key.toUpperCase()}   
      ${item.key.toUpperCase()} ${item.key.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  renderSeparator = () => {
    return (
      <View style={styles.divider}>
        <Divider ></Divider>
        </View>

    );
  };


  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            Availbe Orders
         </Text>
          <Divider></Divider>
          <SearchBar
            placeholder="Search"
            lightTheme
            round
            placeholderTextColor={'#F58634'}
            searchIcon
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
          />
          <FlatList
            ItemSeparatorComponent={this.renderSeparator}
            data={this.listData}
            renderItem={({ item }) => (
              <OrderItem ></OrderItem>
            )}


          />
        </View>
      </SafeAreaView>
    );
  }
}

export default OrdersTab;

