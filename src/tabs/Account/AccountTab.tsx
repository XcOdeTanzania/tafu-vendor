// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View, Switch } from "react-native";
import { Divider } from "react-native-elements";
import ProfileItem from "components/items/profile/Profiletem";
import Ionicons from 'react-native-vector-icons/Ionicons';


interface Props {

}
type AccountTabState = {

}
class AccountTab extends Component<Props, AccountTabState> {
  constructor(props: Props) {
    super(props);

  }
  render() {

    return (
      <View style={styles.container}>
        <ProfileItem></ProfileItem>
        <Divider></Divider>

        <View style={styles.row}>
          <Text style={styles.itemText} >Wallet</Text>
          <Ionicons name='ios-add' size={40} color='#C4C4C4'></Ionicons>
        </View>
        <View style={styles.divider}>
          <Divider ></Divider>
        </View>

        <View style={styles.row}>
          <Text style={styles.itemText} >Change Password</Text>
          <Ionicons name='ios-add' size={40} color='#C4C4C4'></Ionicons>
        </View>
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