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

let styles = StyleSheet.create({
    container: {
        backgroundColor: "#000000",
    },
});

export class Reader extends Component {
    render() {
        return(
            <View style={styles.container}/>
        );
    }
}