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

const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 20;

var styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor:'#F6F5F0',
  },
});

export class FirstView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            headerHeight: HEADER_MAX_HEIGHT,
        };
    }

    navigateTo(route) {
        this.props.navigator.push(route);
    }

    didScroll(contentOffsetY) {

        if (contentOffsetY >= 0) {
            return;
        }

        var height = -contentOffsetY;

        if (height > HEADER_MAX_HEIGHT) {
            height = HEADER_MAX_HEIGHT;
        } else if (height < HEADER_MIN_HEIGHT) {
            height = HEADER_MIN_HEIGHT;            
        }

        this.setState({
            headerHeight: height,
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <NewsList
                didScroll={(contentOffsetY) => {this.didScroll(contentOffsetY)}}
                navigateTo={(component) => {this.navigateTo(component);}}
                ></NewsList>
                <NewsHeader
                headerHeight={this.state.headerHeight}
                ></NewsHeader>
            </View>
        );
    }
}
