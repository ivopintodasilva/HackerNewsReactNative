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
    list_row: {
        height: 60,
    },
    list_image_left: {
        position: 'absolute',
        left: 10,
        top: 10,
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    list_image_right: {
        position: 'absolute',
        right: 10,
        top: 10,
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    list_text: {
        left: 60,
        top: 15,
        fontSize: 22,
    },
});

class ContactRow extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.list_row}>
                <View>
                    <Image source={require('../../img/gongas.jpg')} style={styles.list_image_left}></Image>
                    <Text style={styles.list_text}>{this.props.name}</Text>
                    <Image source={require('../../img/gongas.jpg')} style={styles.list_image_right}></Image>                  
                </View>
            </View>
        );
    };
}

module.exports = ContactRow;