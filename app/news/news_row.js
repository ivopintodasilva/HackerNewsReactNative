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
        'height': 100,
        'backgroundColor': '#F6F5F0',
    },
    row_content: {
        'height': 100,
        'marginLeft': 20,
        'marginRight': 20,
        'alignItems': 'center',
        'justifyContent': 'center',
    },
    title: {
        'fontFamily': 'Avenir',
        'fontSize': 16,
        'fontWeight': '700',
        'textAlign': 'center',
        'color': '#2F2F2F',
    },
};

class NewsRow extends Component {
    constructor(props) {
        super(props);

        console.log(this.props.article.description);
    }

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