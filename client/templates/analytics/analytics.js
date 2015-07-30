Template.analytics.helpers({
    keys: function(){
        return GoogleKeys.find().fetch()
    },
    activeOne:function(){
        GoogleKeys.findOne(Session.get('analyticsId'))
        return GoogleKeys.findOne(Session.get('analyticsId'))
    }
});

Template.analytics.events({
    "submit .analyticsForm": function(event, template){
         event.preventDefault()
         var a = $('form.analyticsForm').serializeArray();
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
         GoogleKeys.update({'_id':Session.get('analyticsId')},{
             $set:formObj
         })
         Session.set('analyticsId',null)
    },
    "submit .newAnalytics": function(event, template){
         event.preventDefault()
         var a = $('form.newAnalytics').serializeArray();
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
         GoogleKeys.insert(formObj)
         Session.set('analyticsId',null)
    }
});
