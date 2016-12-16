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

import ContactHeader from './contactHeader.js';
import ContactRow from './contactRow.js';

var styles = StyleSheet.create({
    list_separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        left: 60,
        backgroundColor: '#8E8E8E',
    },
});

class ContactList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(
                ['Kinita', 
                'Tarraxo', 
                'Gongas', 
                'TXR', 
                'Pedro Torres', 
                'RafaReviews', 
                'Tales',
                'Kinita', 
                'Tarraxo', 
                'Gongas', 
                'TXR', 
                'Pedro Torres', 
                'RafaReviews', 
                'Tales',
                'Kinita', 
                'Tarraxo', 
                'Gongas', 
                'TXR', 
                'Pedro Torres', 
                'RafaReviews', 
                'Tales',
                'Kinita', 
                'Tarraxo', 
                'Gongas', 
                'TXR', 
                'Pedro Torres', 
                'RafaReviews', 
                'Tales',
                'Kinita', 
                'Tarraxo', 
                'Gongas', 
                'TXR', 
                'Pedro Torres', 
                'RafaReviews', 
                'Tales',
                'Kinita', 
                'Tarraxo', 
                'Gongas', 
                'TXR', 
                'Pedro Torres', 
                'RafaReviews', 
                'Tales',])
        };
    }

    render() {
        return(
            <ListView
                dataSource={this.state.dataSource}
                renderHeader={() => <ContactHeader></ContactHeader>}
                renderRow={ (rowData) => <ContactRow name={rowData}></ContactRow> }
                renderSeparator={ (sectionId, rowId) => <View key={rowId} style={styles.list_separator}/> }
            />
        );
    };
}

module.exports = ContactList;