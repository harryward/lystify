Template.list.helpers({
    thisList: function(){
        return ListPosts.findOne(Session.get('params').id)
    },
    pageViews: function(){
        return Analytics.findOne(theId)
    },
    slides: function(){
        return Slides.find({'parent':Session.get('params').id},{sort:{number:1}}).fetch()
    },
    myPic:function(){
        return Session.get('myPic')
    },
    'slideCount':function(){
        return Slides.find({'parent':Session.get('params').id},{sort:{number:-1}}).count()
    },
    'totalSlides':function(){
        return parseInt(Slides.findOne({'parent':Session.get('params').id},{sort:{number:1}}).number) - Slides.find({'parent':Session.get('params').id},{sort:{number:1}}).count()
    }
});

Template.list.events({
    "click .embedKit":function(){
        $('.embedkit').toggle()
    },

    "click .lister":function(){
        SlideId = this._id
        Slides.update({'_id':SlideId},{$set:{'number':prompt('enter number')}})

    },
    "submit .newSlide": function(event, template){
         event.preventDefault()
         var a = $('form.newSlide').serializeArray();
         var formObj = {}
         $.each(a, function() {
             if (formObj[this.name] !== undefined) {

                 if (!formObj[this.name].push) {
                     formObj[this.name] = [formObj[this.name]];
                 }

                 formObj[this.name].push(this.value || false);
             } else {
                 formObj[this.name] = this.value || false;
             }
         })
         console.log('form Object',formObj)
         Slides.insert(formObj)
        //  $('form input,form select,form textarea').val('')
        //  Session.set('myPic',null)
    }
});
