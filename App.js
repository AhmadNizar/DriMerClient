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
  StackNavigator,
  TabNavigator
} from 'react-navigation';

import store from './store'
import { Provider } from 'react-redux'

import Quisioner from './components/screens/Quisioner';
import Register from './components/screens/Register';
import Login from './components/screens/Login';
import Dashboard from './components/screens/Dashboard';


const NavigationBase = StackNavigator({
  Login: { screen: Login },
  Register: { screen: Register },
  Quisioner: { screen: Quisioner }
})

const NavigationTab = TabNavigator({
  Dashboard: { screen: Dashboard }
})

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store} >
        <NavigationBase />
        {/* // <NavigationTab /> */}

      </Provider>
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