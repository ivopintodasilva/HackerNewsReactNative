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

import NewsList from '../news/news_list.js';

import NewsHeader from '../news/news_header.js';

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#F6F5F0',
  },
});

export class FirstView extends Component {

    render() {
        return (
            <View style={styles.container}>
                <NewsHeader></NewsHeader>
                <NewsList></NewsList>
            </View>
        );
    }
}
