// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Switch } from "react-native";
import { Divider, Avatar, Button } from "react-native-elements";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from "react-native-gesture-handler";



interface Props {
  navigation: any,
}

type AccountScreenState =
  {
    selectedIndex: number,
    data: any
  }
class AccountScreen extends Component<Props, AccountScreenState> {
  constructor(props: Props) {
    super(props);

  }
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.body}>
            <Text style={styles.title}>Laptop City</Text>
            <Text style={styles.subtitle}>Kinondoni Morocco</Text>
          </View>
          <View>

            <TouchableOpacity
              onPress={() => console.log('yrsss')
              }>
              <Avatar
                size="large"
                rounded
                title="LC"
                source={{
                  uri:
                    'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                }}
              />

            </TouchableOpacity>

          </View>
        </View>

        <Divider></Divider>
        <View style={{ padding: 20 }}></View>

        <View style={styles.column}>
          <Text style={styles.itemText} >Physical Address</Text>
          <Text style={styles.subtitle}>Kinondoni Morocco, Dar Es Salaam</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>

        <View style={styles.column}>
          <Text style={styles.itemText} >Phone Number</Text>
          <Text style={styles.subtitle}>+25 22 234 232</Text>
          <Text style={styles.subtitle}>+25 22 234 232</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>


        <View style={styles.column}>
          <Text style={styles.itemText} >Email</Text>
          <Text style={styles.subtitle}>info@laptopcity.co.tz</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>
        <View style={styles.row}>
          <Text style={styles.itemText} >Branch</Text>
          <Button
            buttonStyle={styles.buttonAdd}
            title="Add"
          />
        </View>
        <View style={styles.rowBranch}>
          <Ionicons name='ios-add' size={30} color='#f58634'></Ionicons>
          <View style={{ paddingLeft: 10 }}></View>
          <Text style={styles.itemTextBranch} >Kinondoni</Text>
        </View>
        <View style={styles.rowBranch}>
          <Ionicons name='ios-add' size={30} color='#f58634'></Ionicons>
          <View style={{ paddingLeft: 10 }}></View>
          <Text style={styles.itemTextBranch} >Kinondoni</Text>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>

      </View>
    );
  }
}

export default AccountScreen;