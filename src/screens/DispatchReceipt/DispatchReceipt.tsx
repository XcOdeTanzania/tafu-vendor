// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, SafeAreaView, ScrollView } from "react-native";
import { Card, Divider } from "react-native-elements";
import imageICon from '../../assets/icon/tafu.png';
import { Image } from 'react-native';


const iconImageUri = Image.resolveAssetSource(imageICon).uri
interface Props {
  navigation: any,
}

class DispatchReceiptScreen extends Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {

    };

  }
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>

          <Card>
            <View style={styles.cardRow}>
              <View style={styles.cardLeftColumn}>
                <Image source={{ uri: iconImageUri }} style={{ width: 100, height: 100 }} />
                <Text style={styles.cardSmallHeaderText} >Order Number</Text>
                <Text style={styles.cardLargeHeaderText} >#2365</Text>
                <View style={{ padding: 10 }}></View>
                <Text style={styles.cardSmallHeaderText} >Verification Code</Text>
                <Text style={styles.cardLargeHeaderText} >7-6-3-0</Text>

              </View>

              <View style={styles.cardRightColumn}>
                <Text style={styles.cardSmallHeaderText} >Cashier</Text>
                <Text style={styles.cardLargeHeaderText} >Juma Salumu</Text>

                <Text style={styles.cardSmallHeaderText} >0723 232 432</Text>
                <Text style={styles.cardSmallColorHeaderText} >04 May 2020 13:20</Text>

                <Text style={styles.cardSmallHeaderText} >Status</Text>
                <Text style={styles.cardSmallColorHeaderText} >Delievered</Text>
              </View>

            </View>

            <View style={{ padding: 30 }}></View>

            <View style={styles.row}>
              <Text style={styles.cardHearderText} >Samsung TV</Text>
              <Text style={styles.cardHearderText} > TZS 2,000,000 </Text>
            </View>
            <Divider></Divider>
            <View style={styles.cardRow}>
              <Text style={styles.cardBodyText2} >Product Description</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.cardBodyText2} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ipsum est dolor facilisis pulvinar. Pellentesque molestie magnis ornare consectetur vulputate ut duis velit id.</Text>
            </View>

            <Divider></Divider>

          </Card>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default DispatchReceiptScreen;