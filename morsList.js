if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);
    trackPageview = function() {
      var theId = Session.get('params').id
        ga('send', {
            hitType: 'pageview',
            page: Session.get('params').id,
            title:ListPosts.findOne(Session.get('params').id).title
        });
        //ga('send', 'pageview');

        if (Analytics.findOne()) {
            console.log('has analtyics object')
            console.log('theId', theId)
            var theNum = 0
            var ThePost = Analytics.findOne(theId)
            var totes = parseInt(Analytics.findOne(theId).pageviews)
            console.log(totes)
            Analytics.update({
                '_id': theId
            }, {
                $set: {
                    'pageviews': parseInt((totes + 1))
                }
            })
        } else {
            var ThePost = Analytics.findOne(theId)
            Analytics.insert({
                '_id': theId,
                'pageviews': parseInt(1)
            })
            console.log('yo')
        }
    }

}

if (Meteor.isServer) {
    // JsonRoutes.add("get", "/lists/:id", function (req, res, next) {
    //   var id = req.params.id;
    //
    //   JsonRoutes.sendResult(res, 200, Posts.findOne(id));
    // });
    // Enable cross origin requests for all endpoints
    JsonRoutes.setResponseHeaders({
        "Cache-Control": "no-store",
        "Pragma": "no-cache",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
    });

    JsonRoutes.add("get", "/api/lists", function(req, res, next) {
        // var id = req.params.id;

        JsonRoutes.sendResult(res, 200, ListPosts.find().fetch());
    });

    JsonRoutes.add("get", "/api/slides", function(req, res, next) {
        // var id = req.params.id;

        JsonRoutes.sendResult(res, 200, Slides.find().fetch());
    });
    JsonRoutes.add("get", "/api/analytics", function(req, res, next) {
        // var id = req.params.id;

        JsonRoutes.sendResult(res, 200, Analytics.find().fetch());
    });

    Meteor.startup(function() {

        // code to run on server at startup
    });
}
