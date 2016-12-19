import Article from './article.js';

export class News {

    constructor(newsSource) {
        this.source = newsSource;
        this.articles = [];
    }

    addArticle = function (article) {
        this.articles.push(article);
    };

    getArticles = function () {
        return this.articles;
    };
};