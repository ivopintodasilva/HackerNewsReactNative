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

import { NewsProvider } from '../providers/news_provider.js';

import { News } from '../business_logic/news.js';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#ebeef0',
  },
  tabBar: {
      flex: 1,
  },
});

export class FirstView extends Component {

    onPress = () => {

        var completion = function (data) {

            if (data instanceof News === true) {
                console.log(data.source);
                console.log(data.getArticles());
            } else {
                console.log("Not an instance of news");
            }
        }

        NewsProvider.fetchNews(completion);
    }

    render() {
        return (
            <View style={styles.container}>
                <Blink
                    text="Text on the prop"></Blink>
                <Button 
                    title="This is a button"
                    onPress={this.onPress}></Button>
            </View>
        );
    }
}
