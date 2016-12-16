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

    scrollToTop() {
        this.contactList.scrollToTop()
    }

    render() {
        return (
            <View style={styles.container}>
                <ContactList
                ref={(contactList) => {this.contactList = contactList}}
                ></ContactList>
            </View>
        );
    }
}
 
module.exports = SecondView;