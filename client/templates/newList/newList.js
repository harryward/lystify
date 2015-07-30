Template.newList.helpers({
    featuredImage: function(){
        return Session.get('featuredImage')
    }
});
Template.newList.events({
    "submit .newList": function(event, template) {
        event.preventDefault()
        var a = $('form.newList').serializeArray();
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
        formObj['featuredImage'] = Session.get('featuredImage').res;
        formObj['status'] = Session.get('featuredImage').draft;
        formObj['created'] = new Date()
        console.log(formObj)
        ListPosts.insert(formObj)
        thisList = ListPosts.findOne(formObj)
        console.log(thisList)

    }
});
