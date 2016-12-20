/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
  StatusBar,
} from 'react-native';

import { FirstView } from './app/views/first_view.js';
import SecondView from './app/views/second_view.js';

export default class rn extends Component {

  constructor(props) {
    super(props);
    
    StatusBar.setBarStyle('light-content', true);
  }
   

  render() {
    return (
      <View style={{flex: 1}}>
        <FirstView/>
      </View>
    );
  }
}

AppRegistry.registerComponent('rn', () => rn);
