Template.about.events({
    "click .imgcont img":function(e){
        $('.opened').removeClass('opened')
        // e.target.addClass('opened')
        console.log(e.target)
        $(e.target).attr('style','visibility:hidden;')
        $(e.target).addClass("opened fadeIn")
    },
    "click .opened":function(e){

        // e.target.addClass('opened')
        console.log(e.target)
        $(e.target).attr('style','visibility:hidden;')
        $(e.target).addClass("fadeOut")
        $(e.target).removeClass('imgcont opened')
    },
    "submit .joinLystify": function(event, template){
         event.preventDefault()
         var a = $('form.joinLystify').serializeArray();
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
         formObj['createdOn'] = new Date();
         console.log('form Object',formObj)
         Leads.insert(formObj)
         $('form input').val('')
         Meteor.call("sendText", formObj, function(error, result){
             if(error){
                 console.log("error", error);
             }
             if(result){
                  console.log('success',result)
             }
         });
         $('.joinLystify').html('Request submitted, we will get in touch with you soon')
    }
});
