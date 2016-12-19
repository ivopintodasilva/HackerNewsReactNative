/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TabBarIOS,
} from 'react-native';

import { FirstView } from './app/views/first_view.js';
import SecondView from './app/views/second_view.js';

export default class rn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'downloads'
    };
  }
   

  render() {
    return (
      <View style={{flex: 1}}>

      <TabBarIOS 
        selectedTab={this.state.selectedTab}
        unselectedTintColor="yellow"
        tintColor="white"
        barTintColor="darkslateblue">

        <TabBarIOS.Item
          title="Downloads"
          systemIcon="downloads"
          selected={this.state.selectedTab === 'downloads'}
          onPress={() => {
            this.setState({
              selectedTab: 'downloads'
            });
          }}>
        <FirstView/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Contacts"
          systemIcon="contacts"
          selected={this.state.selectedTab === 'contacts'}
          onPress={() => {
            
            // If contacts is already the selected tab, scroll to top
            if (this.state.selectedTab == 'contacts') {
              this.secondView.scrollToTop()
            }

            this.setState({
              selectedTab: 'contacts'
          });
        }}>
        <SecondView
        ref={(secondView) => {this.secondView = secondView}}
        />
        </TabBarIOS.Item>

      </TabBarIOS>
      </View>
    );
  }
}

AppRegistry.registerComponent('rn', () => rn);
