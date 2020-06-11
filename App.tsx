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
import OrderDetailScreen from "screens/OrderDetail";
import ProductDetailScreen from "screens/ProductDetail";
import DispatchListScreen from "screens/DispatchList";
import DispatchDetailScreen from "screens/DispatchDetail";


import WalletScreen from "screens/Wallet";
import AccountScreen from "screens/Account";

import DirectPayScreen from "screens/DirectPay";
import DispatchAwaitingScreen from "screens/DispatchAwaiting";
import DispatchReceiptScreen from "screens/DispatchReceipt";
import PaymentScreen from "screens/Payment";

import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/Entypo";

import { AuthContext } from 'utils/authContext';
import { AsyncStorage, View, Text } from 'react-native';







const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F58634',
  },
};

const MyThemeAuth = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F58634',
    background: '#F58634',
    text: '#F58634',
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

  static auth = AuthContext;


  render() {
    const Stack = createStackNavigator();
    const Tabs = createBottomTabNavigator();


    ///order screen stack
    const orderStackScreen = () => {

      return (
        <Stack.Navigator>
          <Stack.Screen name="OrdersTab" component={OrdersTab} />
          <Stack.Screen name="OrderDetail" component={OrderDetailScreen} />
        </Stack.Navigator>
      );
    }

    ///dispatch screen stack
    const dispatchStackScreen = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen name="DispatchTab" component={DispatchTab}
            options={{
              title: 'Dispatch',
            }} />
          <Stack.Screen name="ProductDetail" component={ProductDetailScreen}
            options={{
              title: 'Product',
            }} />
          <Stack.Screen name="DispatchAwaiting" component={DispatchAwaitingScreen}
            options={{
              title: 'Awaiting',
            }} />
          <Stack.Screen name="DispatchList" component={DispatchListScreen}
            options={{
              title: 'Dispatches',
            }} />
          <Stack.Screen name="DispatchDetail" component={DispatchDetailScreen}
            options={{
              title: 'Details',
            }}
          />
          <Stack.Screen name="DispatchReceipt" component={DispatchReceiptScreen}
            options={{
              title: 'Receipt',
              headerRight: () => (
                <Button
                  type="clear"
                  onPress={() => alert('This is a button!')}
                  icon={
                    <Icon
                      name="share-alternative"
                      size={25}
                      color="#f58634"
                    />
                  }

                />
              ),
            }}
          />
        </Stack.Navigator>
      );
    }

    ///account screen stack
    const accountStackScreen = () => {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Account" component={AccountTab}
            options={{
              title: 'Account',
            }}
          />
          <Stack.Screen name="Wallet" component={WalletScreen}
            options={{
              title: 'Wallet',
            }} />
          <Stack.Screen name="DirectPay" component={DirectPayScreen}
            options={{
              title: 'Direct Pay',
            }} />
          <Stack.Screen name="MyAccount" component={AccountScreen}
            options={{
              title: 'My Account',
            }}
          />

          <Stack.Screen name="Payment" component={PaymentScreen}
            options={{
              title: 'Payment',
            }}
          />
        </Stack.Navigator>
      );
    }



    if (state.isLoading) {
      // We haven't finished checking for the token yet
      return <SplashScreen />;
    }
    return <AuthContext.Consumer >
      {prop => {
        return prop.userToken == null ? <NavigationContainer theme={MyThemeAuth}>

          <Stack.Navigator
            headerMode={"none"}
          >
            <Stack.Screen name='Login' component={LoginScreen}
              options={{
                title: 'Sign in',
                animationTypeForReplace: state.isSignout ? 'pop' : 'push',

              }}
            ></Stack.Screen>
            <Stack.Screen name='Rest' component={PasswordResetScreen}></Stack.Screen>
          </Stack.Navigator>

        </NavigationContainer> : <NavigationContainer
          theme={MyTheme}>

            <Tabs.Navigator
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
              <Tabs.Screen name='Orders' component={orderStackScreen}
                options={{
                  title: 'Orders',
                }}
              ></Tabs.Screen>
              <Tabs.Screen name='Dispatch' component={dispatchStackScreen}></Tabs.Screen>
              <Tabs.Screen name='Notifications' component={NotificationsTab}></Tabs.Screen>
              <Tabs.Screen name='Account' component={accountStackScreen}></Tabs.Screen>
            </Tabs.Navigator>
          </NavigationContainer>
      }}
    </AuthContext.Consumer>;

  }
}



