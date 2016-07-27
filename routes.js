

FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('home');
    }
});

FlowRouter.route('/p/:template', {
    action: function(params, queryParams) {
        Session.set('params',queryParams);
        BlazeLayout.render(params.template);
    }
});

//FlowRouter.route('/', {
//  'template':'home',
//  'title':'LISTIFY - BY HARRY WARD',
//  trackPageView:true,
//});
//FlowRouter.route('/p/:template', {
//    title: function(){
//        if(ListPosts.findOne(this.params.query.id)){
//        var theTitle = 'LISTIFY -- '+ListPosts.findOne(this.params.query.id).title
//        // + ' | '+ Slides.findOne({'parent':this.params.query.id,'number':this.params.query.slide.toString()}).title
//        return theTitle
//    }else{
//        return 'LYSTIFY - BY HARRY WARD'
//    }
//
//    },
//    trackPageView:true,
//     data: function(){
//        theTemp = this.params.template
//        theId = this.params.query.id
//        //  listTitle = ListPosts.findOne(this.params.query.id)
//        Session.set('params',this.params.query)
//        console.log('new route')
//        if($('.bottom-googlead')){$('.bottom-googlead').html('<ins class="adsbygoogle" style="display:inline-block;width:100%;height:60px" data-ad-client="ca-pub-8837201084231310" data-ad-slot="1371200856"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>');
//        }
//        return theTemp
//    },
//    template:function(){
//        if(theTemp){
//            return theTemp
//        }
//    },
//
//});

// FlowRouter.route('/p/:template', function () {
//   Session.set('params',this.params.query)
//    trackPageView: true
//
//    this.render(this.params.template,{
//
//    })
// });
