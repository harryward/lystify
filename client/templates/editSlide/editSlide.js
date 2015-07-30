Template.editSlide.onCreated(function(){
    savePic = function(pic){
        Slides.update({_id:Session.get('params').theId}, {$set:{
            featuredImage:pic.url
        }});

    }
})
Template.editSlide.helpers({
    slide:function(){
        return Slides.findOne(Session.get('params').theId)
    }
})

Template.editSlide.events({
    "submit .editSlideForm": function(event, template){
        event.preventDefault()
        var a = $('form.editSlideForm').serializeArray();
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
        Slides.update({'_id':Session.get('params').theId},{
            $set:formObj
        })
        window.history.back()
    }
});
