import 'react-native-gesture-handler';

import DetailScreen from "../screens/Detail";
import HomeScreen, { strings as homeStrings } from "../screens/Home";
import LoadingScreen from "../screens/Loading";
import LoginScreen, { strings as loginStrings } from "../screens/Login";
import OptionsScreen from "../screens/Options";
import PasswordResetScreen from "../screens/PasswordReset";
import RegisterScreen from "../screens/Register";
import SettingsScreen, { strings as settingsStrings } from "../screens/Settings";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Icon } from "react-native-elements";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();


let RootSwitch = () => <Tabs.Navigator>
    <Tabs.Screen name='Orders' component={HomeScreen}></Tabs.Screen>
    <Tabs.Screen name='Dispatch' component={HomeScreen}></Tabs.Screen>
    <Tabs.Screen name='Notifications' component={HomeScreen}></Tabs.Screen>
    <Tabs.Screen name='Account' component={HomeScreen}></Tabs.Screen>
</Tabs.Navigator>


// let dynamicModalTransition = (
//     transitionProps: NavigationTransitionProps,
//     prevTransitionProps: NavigationTransitionProps
// ): TransitionConfig => {
//     return StackViewTransitionConfigs.defaultTransitionConfig(
//         transitionProps,
//         prevTransitionProps,
//         IOS_MODAL_ROUTES.some(
//             screenName =>
//                 screenName === transitionProps.scene.route.routeName ||
//                 (prevTransitionProps && screenName === prevTransitionProps.scene.route.routeName)
//         )
//     );
// };

// const HomeStack = createStackNavigator(
//     { DetailScreen, HomeScreen, OptionsScreen },
//     { initialRouteName: "HomeScreen", transitionConfig: dynamicModalTransition }
// );



// HomeStack.Screen();
// HomeStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }

//     let drawerLockMode = "unlocked";
//     if (navigation.state.index > 0) {
//         drawerLockMode = "locked-closed";
//     }

//     return {
//         tabBarLabel: homeStrings.homeTitle,
//         tabBarIcon: ({ tintColor }: TabScene) => (
//             <Icon name="ios-home" type="ionicon" color={tintColor} />
//         ),
//         tabBarVisible,
//         drawerLockMode,
//         drawerLabel: homeStrings.homeTitle,
//         drawerIcon: ({ tintColor }: TabScene) => (
//             <Icon name="md-home" type="ionicon" color={tintColor} />
//         )
//     };
// };

// const SettingsStack = createStackNavigator({ SettingsScreen });

// SettingsStack.navigationOptions = {
//     tabBarLabel: settingsStrings.settingsTitle,
//     tabBarIcon: ({ tintColor }: TabScene) => <Icon name="ios-cog" type="ionicon" color={tintColor} />,
//     drawerLabel: settingsStrings.settingsTitle,
//     drawerIcon: ({ tintColor }: TabScene) => <Icon name="md-cog" type="ionicon" color={tintColor} />
// };

// const MainNavigator = Platform.select({
//     ios: createBottomTabNavigator({ HomeStack, SettingsStack }),
//     android: createBottomTabNavigator({ HomeStack, SettingsStack })
// });

// const LoginStack = createStackNavigator({ LoginScreen, PasswordResetScreen });

// LoginStack.navigationOptions = ({ navigation }: NavigationScreenProps) => {
//     let tabBarVisible = true;
//     if (navigation.state.index > 0) {
//         tabBarVisible = false;
//     }

//     return {
//         tabBarLabel: loginStrings.loginTitle,
//         tabBarIcon: ({ tintColor }: TabScene) => {
//             let iconName = Platform.select({ ios: "ios-log-in", android: "md-log-in" });
//             return <Icon name='heartbeat' type="ionicon" color={tintColor} />;
//         },
//         tabBarVisible
//     };
// };

// const AuthTabs = createBottomTabNavigator({ LoginStack, RegisterScreen });

// const RootSwitch = createSwitchNavigator({ LoadingScreen, AuthTabs, MainNavigator });

export default RootSwitch;