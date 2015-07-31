Template.home.helpers({
    published: function(){
        return ListPosts.find({'status':'live'},{sort:{created:-1}}).fetch()
    },
    drafts:function(){
        return ListPosts.find({'status':'draft'},{sort:{created:-1}}).fetch()
    },
    pageviews:function(){
        return Analytics.findOne(this._id)
    }
});
