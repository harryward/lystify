Meteor.methods({
  "sendText": function (argument) {
      client = new Twilio({
            from: '+14062008822', //14062008822 //14062008822
            sid: 'XXXXXXXX',
            token: 'XXXXXXXX'
        });
client.sendSMS({
  to: '+14063708271',
  body: 'New LYSTIFY Lead '+ argument.siteURL + ' e:'+argument.email+ ' p:'+argument.phoneNumber + ' notes:' + argument.useCase
});
  }
});
