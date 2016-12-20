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
  ActivityIndicator
} from 'react-native';

let styles = StyleSheet.create({
    activity_indicator: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    container: {
        flex: 1,
    },
});

export class Reader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }
    }

    loadStarted = () => {
        this.setState({
            loading: true
        });
    }

    loadEnded = () => {
        this.setState({
            loading: false
        });
    }

    render() {

        switch (this.state.loading) {
            case false:
                return(
                    <View style={{flex: 1}}>
                        <WebView
                        onLoadStart={this.loadStarted}
                        onLoadEnd={this.loadEnded}
                        source={{uri: this.props.url}}
                        style={styles.container}
                        />
                    </View>
                );
            case true:
                return(
                    <View style={{flex: 1}}>
                        <WebView
                        onLoadStart={this.loadStarted}
                        onLoadEnd={this.loadEnded}
                        source={{uri: this.props.url}}
                        style={styles.container}
                        />
                        
                        <ActivityIndicator
                        style={styles.activity_indicator}
                        size='small'
                        />
                    </View>
                );
        }
    }
}