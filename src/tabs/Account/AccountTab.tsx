// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import ProfileItem from "components/items/profile/Profiletem";
import Ionicons from 'react-native-vector-icons/Ionicons';

class AccountTab extends Component {

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
          <Ionicons name='ios-add' size={40} color='#F58634'></Ionicons>
        </View>
        <View style={styles.divider}>
        <Divider ></Divider>
        </View>

        <View style={styles.row}>
          <Text style={styles.itemText} >Logout</Text>
          <Ionicons name='ios-add' size={40} color='#F58634'></Ionicons>
        </View>
  
      </View>
    );
  }
}

export default AccountTab;