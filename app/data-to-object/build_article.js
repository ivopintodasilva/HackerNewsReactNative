import { Article } from '../business_logic/article.js';

export var BuildArticle = function (data) {
    var article = new Article(data.id, 
                              data.by, 
                              data.title, 
                              data.descendants, 
                              data.kids, 
                              data.score, 
                              data.type, 
                              data.url);

    return article;
}