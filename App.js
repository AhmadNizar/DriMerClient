/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator
} from 'react-navigation';

import Quisioner from './components/screens/Quisioner';
import Register from './components/screens/Register';
import Login from './components/screens/Login';


const NavigationBase = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Quisioner: { screen: Quisioner }
})

export default class App extends Component<{}> {
  render() {
    return (
      <NavigationBase />
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});