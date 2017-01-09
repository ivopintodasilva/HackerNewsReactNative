export var Article = function (article_id, 
                               article_by, 
                               article_title, 
                               article_descendants, 
                               article_kids, 
                               article_score, 
                               article_type, 
                               article_url) {
    this.id = article_id;
    this.by = article_by;
    this.title = article_title;    
    this.descendants = article_descendants;
    this.kids = article_kids;
    this.score = article_score;
    this.type = article_type;
    this.url = article_url;
};