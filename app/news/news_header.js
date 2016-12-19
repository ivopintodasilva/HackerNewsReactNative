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
    header_text: {
        flex: 1,
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        marginTop: 50
    },
});

class NewsHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.header_text}>Hacker News</Text>
            </View>
        );
    };
}

module.exports = NewsHeader;