import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TabBarIOS,
  WebView,
} from 'react-native';

let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
});

export class Reader extends Component {
    render() {
        return(
            <WebView
                source={{uri: this.props.url}}
                style={styles.container}
            />
        );
    }
}