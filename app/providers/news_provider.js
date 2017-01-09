import { ConstantURL } from '../network/urls.js';
import { BuildNews } from '../serializers/build_news.js';
import { BuildArticle } from '../serializers/build_article.js';

export var NewsProvider = function() {};

NewsProvider.fetchItem = function(item, completion) {
    return fetch(ConstantURL.GetItem + item.toString() + '.json')
        .then(function (response) {
            return response.json();
        }).then(function (json){
            completion(new BuildArticle(json));
        });
};

NewsProvider.fetchTopStories = function(completion) {
    return fetch(ConstantURL.TopStories)
        .then(function (response) {
            return response.json();
        }).then(function (json) {
            completion(json);
        });
};
