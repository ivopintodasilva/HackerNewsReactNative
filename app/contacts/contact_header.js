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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 100,
    },
    header_text: {
        fontSize: 30,
    },
});

class ContactHeader extends Component {
    render() {
        return(
            <View style={styles.header}>
                <Text style={styles.header_text}>The swag people</Text>
            </View>
        );
    };
}

module.exports = ContactHeader;