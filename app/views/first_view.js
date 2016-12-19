import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TabBarIOS,
} from 'react-native';

import 'whatwg-fetch'

import { Blink } from '../components/blink.js';

import NewsList from '../news/news_list.js';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F6F5F0',
  },
  tabBar: {
      flex: 1,
  },
});

export class FirstView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <NewsList></NewsList>
            </View>
        );
    }
}
