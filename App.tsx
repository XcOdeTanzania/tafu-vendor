import React, { Component } from "react";
import HomeScreen, { strings as homeStrings } from "screens/Home";

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
        <Tabs.Screen name='Orders' component={HomeScreen}></Tabs.Screen>
        <Tabs.Screen name='Dispatch' component={HomeScreen}></Tabs.Screen>
        <Tabs.Screen name='Notifications' component={HomeScreen}></Tabs.Screen>
        <Tabs.Screen name='Account' component={HomeScreen}></Tabs.Screen>
      </Tabs.Navigator>
    </NavigationContainer>;
  }
}

