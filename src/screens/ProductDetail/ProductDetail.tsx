// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Platform, Text, View, SafeAreaView, ScrollView } from "react-native";
import { Button, Image, Card, Divider } from "react-native-elements";
import { SliderBox } from "react-native-image-slider-box";
interface Props {
  navigation: any,
}

class ProductDetailScreen extends Component<Props> {
  constructor(props: any) {
    super(props);
    this.state = {
      images: [
        "https://source.unsplash.com/1024x768/?tree",
        "https://source.unsplash.com/1024x768/?girl",

      ]
    };

  }
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View >

            <View style={styles.row}>
              <Text style={styles.cardHearderText} >Samsung TV</Text>
              <Text style={styles.cardHearderText} > #2343</Text>
            </View>
            <View style={styles.divider}>
              <Divider ></Divider>
            </View>

            <View style={styles.row}>
              <SliderBox images={[
                "https://source.unsplash.com/1024x768/?tree",
                "https://source.unsplash.com/1024x768/?girl",

              ]}
                dotColor="#f58634"
                inactiveDotColor="#90A4AE"


              />
            </View>

            <Card>
              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Product Details</Text>
              </View>
              <Divider></Divider>
              <View style={styles.row}>
                <Text style={styles.cardBodyText2} >Item Name</Text>
                <Text style={styles.cardBodyText2} > Sumsang TV</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Price</Text>
                <Text style={styles.cardBodyText2} >TZ 2,000,000</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Size</Text>
                <Text style={styles.cardBodyText2} >40 Inchs</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Color</Text>
                <Text style={styles.cardBodyText2} >Black</Text>
              </View>

              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Carrier Details</Text>
              </View>
              <Divider></Divider>
              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Name</Text>
                <Text style={styles.cardBodyText2} >Juma Salum</Text>
              </View>
              <View style={styles.cardRow}>
                <Text style={styles.cardBodyText2} >Phone Number</Text>
                <Text style={styles.cardBodyText3} >0712123456</Text>
              </View>
              <Divider></Divider>
              <View style={styles.cardRow1}>
                <Button type="outline" buttonStyle={styles.button} onPress={() => {
                  console.log('hello');
                }} title='Dispatch' titleStyle={styles.fonts}></Button>
              </View>
            </Card>




          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default ProductDetailScreen;