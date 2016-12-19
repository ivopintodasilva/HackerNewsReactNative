import { Article } from '../business_logic/article.js';

export var BuildArticle = function (data) {
    var article = new Article(data.author, 
                              data.title, 
                              data.description, 
                              data.url, 
                              data.imageUrl, 
                              data.publishedAt);

    return article;
}