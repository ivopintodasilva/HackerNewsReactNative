import { ConstantURL } from '../network/urls.js';

import { BuildNews } from '../data-to-object/buildNews';

export var NewsProvider = function() {};

NewsProvider.fetchNews = function(completion) {

    return fetch(ConstantURL.HackerNews)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            completion(new BuildNews(json));
        });

};