import Article from './article.js';

var News = function (news_source) {

    this.source = news_source;
    var articles = [];

    this.addArticle = function (article) {
        articles += article;
    };

    this.getArticles = function () {
        return articles;
    };
};