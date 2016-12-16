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

import { Blink } from '../components/blink.js';

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
        Alert.alert("omg");
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
