import Article from './article.js';

export var News = function (news_source) {

    this.source = news_source;
    var articles = [];

    this.addArticle = function (article) {
        articles.push(article);
    };

    this.getArticles = function () {
        return articles;
    };
};