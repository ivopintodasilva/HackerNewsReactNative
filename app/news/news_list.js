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
  ActivityIndicator,
} from 'react-native';

import { NewsProvider } from '../providers/news_provider.js';

import { News } from '../business_logic/news.js';

import NewsRow from '../news/news_row.js';

var styles = StyleSheet.create({
    list_separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
    },
    activity_indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class NewsList extends Component {
    ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            refreshing: false,
            dataSource: this.ds.cloneWithRows([]),
        };
    }

    componentDidMount() {

        var completion = function (data) {
            if (data instanceof News === true) {

                this.setState({
                    'loading': false,
                    'refreshing': false,
                    'dataSource': this.ds.cloneWithRows(data.getArticles())
                });

                console.log(data.source);
                console.log(data.getArticles());

            } else {

                this.setState({
                    'loading': false,
                    'refreshing': false,
                    'dataSource': this.ds.cloneWithRows([])
                });

                console.log("Not an instance of news");
            }
        }.bind(this);

        NewsProvider.fetchNews(completion);

    }

    render() {
        if (this.state.loading) {
            return(
                <ActivityIndicator
                    style={styles.activity_indicator}
                    size='large'
                />
            );
        } else {
            return(
                <ListView
                    automaticallyAdjustContentInsets={false}
                    contentInset={{bottom: 50}}
                    enableEmptySections={true}
                    ref={(listView) => { this.listView = listView}}
                    dataSource={this.state.dataSource}
                    renderRow={ (rowData) => <NewsRow article={rowData}></NewsRow> }
                    renderSeparator={ (sectionId, rowId) => <View key={rowId} style={styles.list_separator}/> }
                />
            );
        }
    };
}

module.exports = NewsList;