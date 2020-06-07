import React, { Component } from "react";
import  OrdersTab from "tabs/Orders";
import  DispatchTab from "tabs/Dispatch";
import  NotificationsTab from "tabs/Notifications";
import  AccountTab from "tabs/Account";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from "react-native-vector-icons/Icon";

interface Props { }
export default class App extends Component<Props> {
  componentDidMount = () => {

  };

  render() {
    const Stack = createStackNavigator();
    const Tabs = createBottomTabNavigator();
    return <NavigationContainer>
      <Tabs.Navigator>
        <Tabs.Screen name='Orders' component={OrdersTab}></Tabs.Screen>
        <Tabs.Screen name='Dispatch' component={DispatchTab}></Tabs.Screen>
        <Tabs.Screen name='Notifications' component={NotificationsTab}></Tabs.Screen>
        <Tabs.Screen name='Account' component={AccountTab}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>;
  }
}

