Template.listMod.onCreated(function(){

    Session.set('loading',true)
    setTimeout(function(){
    $('.loader').addClass('fadeOut')
    $('.megarow').addClass('fadeIn')
    Session.set('loading',false)

}, 2000);

})

Template.listMod.helpers({
    thisList: function(){


        return ListPosts.findOne(Session.get('params').id)
    },
    pageViews: function(){
        return Analytics.findOne(theId)
    },
    'loading':function(){
        return Session.get('loading')
    },
    'production':function(){
            return Session.get('params').prod
    },
    slideCount:function(){
        return  Slides.find({'parent':Session.get('params').id,},{sort:{number:-1}}).count()
    },
    slideCountMore:function(){
        console.log(this)
        console.log(Slides.find({'parent':this._id},{sort:{number:-1}}).count())
        return  Slides.find({'parent':this._id},{sort:{number:-1}}).count()
    },
    moreLists:function(){
     return ListPosts.find({'_id':{$nin:[Session.get('params').id]},status:'live'},{limit:2}).fetch()
     },
     slideCheck :function(){
         if(Session.get('params').slide === '1'){
             return true
         }else{
         if(Slides.findOne(Slides.findOne({'parent':Session.get('params').id,'number':(parseInt(Session.get('params').slide)-1).toString()},{sort:{number:-1}}))){
             console.log('true',Slides.findOne(Slides.findOne({'parent':Session.get('params').id,'number':Session.get('params').slide},{sort:{number:-1}})))
             return true
         }else{
             console.log('false',Slides.findOne(Slides.findOne({'parent':Session.get('params').id,'number':Session.get('params').slide},{sort:{number:-1}})))
             return false
         }
         }
     },
    nextSlide: function(){

        if(Slides.findOne(Slides.findOne({'parent':Session.get('params').id,'number':(parseInt(Session.get('params').slide)-1).toString()},{sort:{number:-1}}))){
            if(Session.get('params').slide=== '1'){
return parseInt(Session.get('params').slide)
            }else{
return parseInt(Session.get('params').slide)-1
            }

    }else{

        return false
    }
    },
    prevSlide: function(){
        if(Slides.findOne(Slides.findOne({'parent':Session.get('params').id,'number':(parseInt(Session.get('params').slide)+1).toString()},{sort:{number:-1}}))){
            // if(Session.get('params').slide=== '1'){
            //
            // }
        return parseInt(Session.get('params').slide)+1
    }else{
        return false
    }
    },
    theSlide: function(){
        Session.set('thisSlide',Slides.findOne({'parent':Session.get('params').id,'number':Session.get('params').slide},{sort:{number:-1}}))
        return Slides.findOne({'parent':Session.get('params').id,'number':Session.get('params').slide},{sort:{number:-1}})
    },
    myPic:function(){
        return Session.get('myPic')
    }
});

Template.listMod.events({
    "click .nextSlide": function(event, template){



         trackPageview();
         Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1))
        if(Session.get('params').prod){
        if(Session.get('params').slide === '2'){
//         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');


 Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1)+'&prod=true')

        // window.location = ('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1)+'&prod=true')
    }else{
//         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

 Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1)+'&prod=true')
        // window.location = ('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1)+'&prod=true')
    }

    }else{
//         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
 Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1))
        // window.location = ('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1))
    }

},
"click .prevSlide": function(event, template){

    // $('.megarow').addClass("fadeIn")
    trackPageview()
    //  trackPageview(); Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)-1))
    if(Session.get('params').prod){
    if(Session.get('params').slide === '1'){
//         (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
 Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)+1)+'&prod=true')
    // window.location = ('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)+1)+'&prod=true')
//     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
// ga('create', 'UA-23373718-2', 'auto');ga('send', 'pageview');;
}else{
 Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)+1)+'&prod=true')
    // window.location = ('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)+1)+'&prod=true')
}

}else{
//     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
// (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
// m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
// })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
//
// ga('create', 'UA-23373718-2', 'auto');
// ga('send', 'pageview');
     Router.go('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)+1))
    // window.location = ('/p/listMod?id='+Session.get('params').id+'&slide='+(parseInt(Session.get('params').slide)+1))
}

}
});
