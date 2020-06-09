// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { SearchBar, Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { DispatchItem } from "components/items/dispatch/DispatchItem";

interface Props {
  navigation: any,
}
class DispatchAwaitingScreen extends Component<Props> {
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

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          margin: "2%",
        }}
      />
    );
  };


  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            Awaiting
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
                onPress={() => navigation.navigate('ProductDetail', { item: 'character' })}>
                <DispatchItem ></DispatchItem>
              </TouchableOpacity>

            )}


          />
        </View>
      </SafeAreaView>
    );
  }
}

export default DispatchAwaitingScreen;