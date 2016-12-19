import News from '../business_logic/news.js';
import buildArticle from './buildArticle';

var buildNews = function (data) {
    var news = new News(data.source);

    data.articles.forEach(function (articleData) {
        var article = buildArticle(articleData.author, 
                                   articleData.title, 
                                   articleData.description, 
                                   articleData.url, 
                                   articleData.imageUrl, 
                                   articleData.publishedAt);

        news.addArticle(article);
    });

    return news;
}