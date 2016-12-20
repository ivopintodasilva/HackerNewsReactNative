import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TabBarIOS,
  NavigatorIOS,
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

    navigateTo(route) {
        this.props.navigator.push(route);
    }

    render() {
        return (
            <View style={styles.container}>
                <NewsHeader></NewsHeader>
                <NewsList
                navigateTo={(component) => {this.navigateTo(component);}}
                ></NewsList>
            </View>
        );
    }
}
