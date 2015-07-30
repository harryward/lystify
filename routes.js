
Router.route('/', {
  'template':'home',
  'title':'LISTIFY - BY HARRY WARD',
  trackPageView:true,
});
Router.route('/p/:template', {
    title: function(){
        if(ListPosts.findOne(this.params.query.id)){
        var theTitle = 'LISTIFY -- '+ListPosts.findOne(this.params.query.id).title
        // + ' | '+ Slides.findOne({'parent':this.params.query.id,'number':this.params.query.slide.toString()}).title
        return theTitle
    }else{
        return 'LYSTIFY - BY HARRY WARD'
    }

    },
    trackPageView:true,
     data: function(){

        theId = this.params.query.id
        //  listTitle = ListPosts.findOne(this.params.query.id)
        theTemp = this.params.template
        Session.set('params',this.params.query)
        console.log('new route')
        $('.bottom-googlead').html('<ins class="adsbygoogle" style="display:inline-block;width:100%;height:60px" data-ad-client="ca-pub-8837201084231310" data-ad-slot="1371200856"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script>')
        return theTemp
    },
    template:function(){
        if(theTemp){
            return theTemp
        }
    },

});

// Router.route('/p/:template', function () {
//   Session.set('params',this.params.query)
//    trackPageView: true
//
//    this.render(this.params.template,{
//
//    })
// });
