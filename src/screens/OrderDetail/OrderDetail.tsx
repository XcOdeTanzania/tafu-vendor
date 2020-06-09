// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Card, Divider } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';


class OrderDetailScreen extends Component {


  render() {

    return (
      <View style={styles.container}>

        <View style={styles.row}>
          <View style={styles.headerRow}>
            <Ionicons name='ios-clock' size={40} color='#f58634'></Ionicons>
            <Text style={styles.itemText} >00:28 pm</Text>
          </View>
          <View style={styles.buttonPadding}>
            <Button type='outline' buttonStyle={styles.button} onPress={() => {
              console.log('hello');
            }} title='Confirm' titleStyle={styles.fonts}></Button>
          </View>


        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>
        <Card>
          <Text style={styles.cardBodyText} >You have 30 Minutes to confirm the avilability of the good</Text>
        </Card>


        <Card>
          <View style={styles.row}>
            <Text style={styles.cardHearderText} >Order Details</Text>
            <Text style={styles.cardHearderText} > #2343</Text>
          </View>
          <Divider></Divider>
          <View style={styles.row}>
            <Text style={styles.cardBodyText2} >Item Name</Text>
            <Text style={styles.cardBodyText2} > Sumsang TV</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cardBodyText2} >Price</Text>
            <Text style={styles.cardBodyText2} >TZ 2,000,000</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cardBodyText2} >Size</Text>
            <Text style={styles.cardBodyText2} >40 Inchs</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.cardBodyText2} >Color</Text>
            <Text style={styles.cardBodyText2} >Black</Text>
          </View>
        </Card>




      </View>
    );
  }
}

export default OrderDetailScreen;