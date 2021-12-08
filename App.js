/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import StartScreen from './Screens/MainScreens/StartScreen';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import TabNavScreen from './Screens/TabNavigation/TabNavScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="StartScreen" options={{headerShown: false}} component={StartScreen} /> */}
          <Stack.Screen name="LoginScreen" options={{headerShown: false}} component={Login} />
          {/* <Stack.Screen name="SignupScreen" options={{headerShown: false}} component={Signup} /> */}
          {/* <Stack.Screen
            name="TabNavScreen"
            options={{headerShown: false}}
            component={TabNavScreen}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
