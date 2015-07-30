Template.editPromo.onCreated(function(){
    savePic = function(pic){
        ListPosts.update({_id:Session.get('params').id}, {$set:{
            featuredImage:pic
        }});

    }
})
Template.editPromo.helpers({
    slide:function(){
        return ListPosts.findOne(Session.get('params').id)
    }
})

Template.editPromo.events({
    "submit .editPromoForm": function(event, template){
        event.preventDefault()
        var a = $('form.editPromoForm').serializeArray();
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
        ListPosts.update({'_id':Session.get('params').id},{
            $set:formObj
        })
        window.history.back()
    }
});
