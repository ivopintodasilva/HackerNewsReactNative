import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TabBarIOS,
  ListView,
  Image,
} from 'react-native';

var styles = StyleSheet.create({
    header: {
        height: 100,
        backgroundColor: '#FF6600',
    },
    content: {
        flex: 1, 
        top: 40,
    },
    header_title: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        bottom: 0,
    },
    header_subtitle: {
        fontFamily: 'Avenir',
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        textAlign: 'center',
        bottom: 0,
    },

});

class NewsHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <View style={styles.content}>
                    <Text style={styles.header_title}>Hacker News</Text>
                    <Text style={styles.header_subtitle}>TOP STORIES</Text>
                </View>
            </View>
        );
    };
}

module.exports = NewsHeader;