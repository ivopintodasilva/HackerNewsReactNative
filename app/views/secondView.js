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

import ContactList from '../contacts/contactList.js';

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

 
class SecondView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ContactList></ContactList>
            </View>
        );
    }
}
 
module.exports = SecondView;