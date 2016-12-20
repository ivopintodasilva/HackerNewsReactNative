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
  TouchableHighlight,
} from 'react-native';

var styles = {
    row: {
        height: 100,
        backgroundColor: '#F6F5F0',
    },
    row_content: {
        height: 100,
        margin: 10,
    },
    title: {
        fontFamily: 'Avenir',
        fontSize: 14,
        fontWeight: '700',
        textAlign: 'left',
        color: '#5F5F5F',
    },
};

class NewsRow extends Component {
    rowTapped = () => {
        Alert.alert(this.props.article.title);
    }

    render() {
        return(
            <View style={styles.row}>
                <TouchableHighlight 
                underlayColor='#DADADA'
                onPress={this.rowTapped}>
                    <View style={styles.row_content}>
                        <Text style={styles.title}>{this.props.article.title}</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };
}

module.exports = NewsRow;