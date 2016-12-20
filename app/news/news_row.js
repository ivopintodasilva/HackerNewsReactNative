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
        flex: 1,
        backgroundColor: '#F6F5F0',
    },
    row_content: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
    },
    left_content: {
        flex: 6,
    },
    right_content: {
        flex: 1,
    },
    title: {
        fontFamily: 'Avenir',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'left',
        color: '#5F5F5F',
    },
    author: {
        fontFamily: 'Avenir-Light',
        fontSize: 15,
        textAlign: 'left',
        color: '#A3A2A1',
    },
    score: {
        fontFamily: 'Avenir-Light',
        fontSize: 15,
        textAlign: 'right',
        color: '#FF6600',
    },

};

class NewsRow extends Component {
    rowTapped = () => {
        Alert.alert(this.props.article.url);
    }

    render() {
        return(
            <View style={styles.row}>
                <TouchableHighlight 
                underlayColor='#DADADA'
                onPress={this.rowTapped}>
                    <View style={styles.row_content}>
                        <View style={styles.left_content}>
                            <Text style={styles.title}>{this.props.article.title}</Text>
                            <Text style={styles.author}>{this.props.article.by}</Text>
                        </View>
                        <View style={styles.right_content}>
                            <Text style={styles.score}>{this.props.article.score}</Text>
                        </View>
                    </View>
                </TouchableHighlight>
            </View>
        );
    };
}

module.exports = NewsRow;