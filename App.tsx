import React, { Component } from "react";
import OrdersTab from "tabs/Orders";
import DispatchTab from "tabs/Dispatch";
import NotificationsTab from "tabs/Notifications";
import AccountTab from "tabs/Account";

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from "screens/Home";
import PasswordResetScreen from "screens/PasswordReset";
import LoginScreen from "screens/Login";


const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
  },
};

interface State {
  error: string;
  isLoading: boolean;
  userToken: string | null | undefined;
  isSignout: boolean;
}

const state: State = {
  error: '',
  isLoading: false,
  userToken: null,
  isSignout: true,
}
  ;

interface Props { }
export default class App extends Component<Props> {


  componentDidMount = () => {

  };


  render() {
    const Stack = createStackNavigator();
    const Tabs = createBottomTabNavigator();

    if (state.isLoading) {
      // We haven't finished checking for the token yet
      return <SplashScreen />;
    }


    return <NavigationContainer
      theme={MyTheme}>


      state.userToken == null ?(
        <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            title: 'Sign in',
            animationTypeForReplace: state.isSignout ? 'pop' : 'push',
          }}
        />
        <Stack.Screen name="Rest" component={PasswordResetScreen}
          options={{
            title: 'Rest Password',
          }}
        />
      </Stack.Navigator>
      ): (<Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string;

            if (route.name === 'Orders') {
              iconName = focused
                ? 'ios-apps'
                : 'ios-apps';
            } else if (route.name === 'Dispatch') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }
            else if (route.name === 'Notifications') {
              iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks';
            }
            else if (route.name === 'Account') {
              iconName = focused ? 'ios-person' : 'ios-person';
            } else {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen name='Orders' component={OrdersTab}></Tabs.Screen>
        <Tabs.Screen name='Dispatch' component={DispatchTab}></Tabs.Screen>
        <Tabs.Screen name='Notifications' component={NotificationsTab}></Tabs.Screen>
        <Tabs.Screen name='Account' component={AccountTab}></Tabs.Screen>
      </Tabs.Navigator>)


    </NavigationContainer>;
  }
}

