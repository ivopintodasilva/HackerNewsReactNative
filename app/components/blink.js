import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export class Blink extends Component {
  
  constructor(props) {
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({showText: !this.state.showText});
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
        <Text>{display}</Text>
    );
  }
}
