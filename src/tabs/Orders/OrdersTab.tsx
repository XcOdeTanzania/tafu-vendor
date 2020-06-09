// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { SafeAreaView, View, FlatList, Text, Alert } from "react-native";
import OrderItem from '../../components/items/order/OrderItem';
import { SearchBar, Divider } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";


interface Props {
  navigation: any,
}

class OrdersTab extends Component<Props>{

  constructor(props: any) {
    super(props);

  }

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

  handler = () => {
    // write your logic 
  }
  renderSeparator = () => {
    return (
      <View style={styles.divider} >
        <Divider ></Divider>
      </View>


    );
  };


  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            Availble Orders
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

              <TouchableOpacity
                onPress={() => navigation.navigate('OrderDetail', { item: 'character' })}>
                <OrderItem ></OrderItem>
              </TouchableOpacity>

            )}


          />
        </View>
      </SafeAreaView>
    );
  }
}

export default OrdersTab;

