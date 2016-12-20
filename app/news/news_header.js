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
        height: 100,
        backgroundColor: '#FF6600',
    },
    content: {
        top: 40,
    },
    header_title: {
        fontFamily: 'Avenir',
        fontSize: 20,
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        bottom: 0,
    },
    header_subtitle: {
        fontFamily: 'Avenir',
        fontSize: 12,
        fontWeight: '300',
        color: '#FFFFFF',
        textAlign: 'center',
        bottom: 0,
    },

});

class NewsHeader extends Component {

    constructor(props) {
        super(props);

        styles.header.height = props.headerHeight;
    }

    componentWillUpdate(nextProps, nextState) {
        styles.header.height = nextProps.headerHeight;
    }

    render() {
        return(
            <View style={{
                    height: this.props.headerHeight, 
                    backgroundColor: '#FF6600',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                }}>
                <View style={{
                        top: 40 + this.props.headerHeight - 100,
                        opacity: this.props.headerHeight / 100,
                    }}>
                    <Text style={styles.header_title}>Hacker News</Text>
                    <Text style={styles.header_subtitle}>TOP STORIES</Text>
                </View>
            </View>
        );
    };
}

module.exports = NewsHeader;