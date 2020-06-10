// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Switch } from "react-native";
import { Divider, Avatar, Button } from "react-native-elements";
import ProfileItem from "components/items/profile/Profiletem";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";



interface Props {
  navigation: any,
}

type AccountTabState =
  {
    selectedIndex: number,
    data: any
  }
class AccountTab extends Component<Props, AccountTabState> {
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
              onPress={() => navigation.navigate('MyAccount', { item: 'character' })
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
        <TouchableOpacity
          onPress={() => navigation.navigate('Wallet', { item: 'character' })
          }>
          <View style={styles.row}>
            <Text style={styles.itemText} >Wallet</Text>
            <Icon name='wallet' size={25} color='#C4C4C4'></Icon>
          </View>
        </TouchableOpacity>


        <View style={styles.divider}>
          <Divider ></Divider>
        </View>
        <TouchableOpacity
          onPress={() => { }
          }>
          <View style={styles.row}>
            <Text style={styles.itemText} >Change Password</Text>
            <Icon name='lock' size={25} color='#C4C4C4'></Icon>
          </View>
        </TouchableOpacity>

        <View style={styles.divider}>
          <Divider ></Divider>
        </View>


        <View style={styles.row}>
          <Text style={styles.itemText} >Notifications</Text>
          <Switch></Switch>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>

        <View style={styles.row}>
          <Text style={styles.itemText} >Logout</Text>
          <Switch></Switch>
        </View>

      </View>
    );
  }
}

export default AccountTab;