// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { SearchBar, Divider, ButtonGroup } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import DispatchAwaitItem from "components/items/dispatchAwait/DispatchAwaitItem";
import Dialog, { DialogContent, DialogFooter, DialogButton } from 'react-native-popup-dialog';
import QRCode from 'react-native-qrcode-svg';




interface Props {
  navigation: any,

}
type DispatchAwaitingState =
  {
    selectedIndex: number,
    data: any,
    visibleQRCode: boolean,
    visibleConfirmationDialog: boolean,
  }
class DispatchAwaitingScreen extends Component<Props, DispatchAwaitingState> {
  constructor(props: any) {
    super(props);
    this.state = {
      selectedIndex: 0,
      data: [],
      visibleQRCode: false,
      visibleConfirmationDialog: false
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
    const buttons = ['Confirmation', 'Dispatch']
    const { selectedIndex } = this.state
    const { navigation } = this.props;
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            Awaiting
         </Text>
          <Divider></Divider>

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
          <FlatList
            ItemSeparatorComponent={this.renderSeparator}
            data={selectedIndex == 0 ? this.listSuccessfulData : this.listReturnedData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  selectedIndex == 0 ? navigation.navigate('ProductDetail', { item: 'character' }) : this.setState({ visibleQRCode: true })

                }>
                <DispatchAwaitItem ></DispatchAwaitItem>
              </TouchableOpacity>

            )}


          />

          <Dialog visible={this.state.visibleQRCode}
            onTouchOutside={() => {
              this.setState({ visibleQRCode: false });
              this.setState({ visibleConfirmationDialog: true });

            }}
            width={0.5}
          >
            <DialogContent style={styles.dialogContent}>
              <View>
                <Text style={styles.contentHeader}>7-6-3-0</Text>
              </View>
              <View style={styles.QRCodeContainer}>
                <QRCode
                  value="http://awesome.link.qr"
                />
              </View>
              <View style={styles.dialogContainer}>
                <Text>30 Sec: 10 Sec</Text>
              </View>
            </DialogContent>

          </Dialog>


          <Dialog visible={this.state.visibleConfirmationDialog}
            onTouchOutside={() => {



            }}
            width={0.8}
            
          >
            <DialogContent style={styles.dialogConfirmContent}>
              <View>
                <Text style={styles.contentConfirmHeader}>Dispatch Successfully</Text>
              </View>

              <View >
                <Text style={styles.dialogConfirmContainer}>Salum Juma confirm to receive the package in good condition</Text>
              </View>
            </DialogContent>

            <DialogFooter>
              <DialogButton text={'Okay'} onPress={() => {
                this.setState({ visibleConfirmationDialog: false });
                navigation.navigate('DispatchReceipt', { item: 'character' })
              }} ></DialogButton>
            </DialogFooter>

          </Dialog>



        </View>
      </SafeAreaView>
    );
  }
}

export default DispatchAwaitingScreen;