import { News } from '../business_logic/news.js';
import { BuildArticle } from './buildArticle.js';

export var BuildNews = function (data) {

    var news = new News(data.source);

    data.articles.forEach(function (articleData) {
        var article = BuildArticle(articleData);
        news.addArticle(article);
    });

    return news;
}