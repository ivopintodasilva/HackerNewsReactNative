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
import { BuildNews } from '../data-to-object/build_news.js';

const styles = StyleSheet.create({
    list_separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#DADAD7',
        marginLeft: 10,
        marginRight: 10,
    },
    activity_indicator: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class NewsList extends Component {

    constructor(props) {
        super(props);

        this.articles = [];
        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            loading: true,
            refreshing: false,
            dataSource: this.ds.cloneWithRows([])
        };
    }

    // Update the list
    _completion(articles) {
        let source = 'Hacker News'
        let news = new BuildNews(source, articles)

        this.setState({
            'loading': false,
            'refreshing': false,
            'dataSource': this.ds.cloneWithRows(news.getArticles())
        });
    }

    // Load the story for each id in the top stories array
    _loadTopStories(ids) {
        for (var i = 0; i < 50; i++) {
            NewsProvider.fetchItem(ids[i], (data) => {
                this.articles.push(data);
                this._completion(this.articles);
            });
        }
    }

    componentDidMount() {
        // Hacker news API requires a call to get the IDs of the top stories
        // and then another one for each item to load
        NewsProvider.fetchTopStories((data) => {this._loadTopStories(data);});
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
                    contentInset={{top:0, bottom: 0}}
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