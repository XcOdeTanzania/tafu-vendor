// import strings from "./strings";
import styles from "./styles";
import React, { Component } from "react";
import { Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { NotificationItem } from "components/items/notification/NotificationItem";

class NotificationsTab extends Component {

  listData = [{ name: 'Today', data: [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }] },
  { name: 'Yesterday', data: [{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }, { key: 'e' }, { key: 'f' }, { key: 'g' }, { key: 'h' }, { key: 'i' }] }];


  renderHeader = () => {
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.noficationCateory} >May 05</Text>
          <Text style={styles.noficationCateory}>Today</Text>
        </View>
        <Divider></Divider>
      </View>

    );
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

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>
            Notifications
         </Text>
          <Divider></Divider>
          <FlatList
            ItemSeparatorComponent={this.renderSeparator}
            data={this.listData}
            renderItem={({ item }) => (
              <NotificationItem ></NotificationItem>
            )}
            ListHeaderComponent={this.renderHeader}
          />

        </View>
      </SafeAreaView>
    );
  }
}

export default NotificationsTab;