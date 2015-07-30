Template.home.helpers({
    published: function(){
        return ListPosts.find({'status':'live'}).fetch()
    },
    drafts:function(){
        return ListPosts.find({'status':'draft'}).fetch()
    },
    pageviews:function(){
        return Analytics.findOne(this._id)
    }
});
