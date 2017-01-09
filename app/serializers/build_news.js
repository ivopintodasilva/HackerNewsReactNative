import { News } from '../models/news.js';
import { BuildArticle } from './build_article.js';

export var BuildNews = function (source, articles) {

    var news = new News(source);

    articles.forEach(function (articleData) {
        var article = BuildArticle(articleData);
        news.addArticle(article);
    });

    return news;
}
