// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { SearchBar, Divider, Button, ButtonGroup } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/FontAwesome';
import WalletItem from "components/items/wallet/WalletItem";


interface Props {
  navigation: any,
}

type WalletScreenState =
  {
    selectedIndex: number,
    data: any
  }
class WalletScreen extends Component<Props, WalletScreenState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      data: []
    }
    this.updateIndex = this.updateIndex.bind(this);

  }

  updateIndex(selectedIndex: number) {
    this.setState({ selectedIndex })
  }

  listSuccessfulData = [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }];
  listReturnedData = [{ key: 'a' }, { key: 'b' }, { key: 'c' },];

  searchFilterFunction = (text: string) => {
    const newData = this.listSuccessfulData.filter(item => {
      const itemData = `${item.key.toUpperCase()}   
      ${item.key.toUpperCase()} ${item.key.toUpperCase()}`;

      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });

    this.setState({ data: newData });
  };

  render() {
    const buttons = ['Sales', 'Penalty']
    const { selectedIndex } = this.state
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View >
          <View style={styles.rowHeader}>
           
            
          </View>
          <
            
            Divider></Divider>
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            selectedButtonStyle={styles.buttonGroup}
            containerStyle={{ height: 50, borderRadius: 15, }}
          />

          <SearchBar
            placeholder="Search"
            lightTheme
            round
            placeholderTextColor={'#F58634'}
            searchIcon
            onChangeText={text => this.searchFilterFunction(text)}
            autoCorrect={false}
          />
          <View style={{ padding: 10 }}></View>
            <View style={styles.rowHeader}>
            <Text style={styles.header}>
              
            </Text>
            <Button
              buttonStyle={styles.button}
           
              onPress={() => {
                console.log('hello');
                navigation.navigate('DispatchAwaiting', { item: 'product' })
              }}

              title="  Withdraw  "
              titleStyle={styles.fonts}
            />

          </View>
          <FlatList

            data={selectedIndex == 0 ? this.listSuccessfulData : this.listReturnedData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductDetail', { item: 'character' })
                }>
                <WalletItem ></WalletItem>
              </TouchableOpacity>

            )}


          />
        </View>
      </SafeAreaView>
    );
  }
}

export default WalletScreen;