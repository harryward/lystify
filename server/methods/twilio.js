Meteor.methods({
  "sendText": function (argument) {
      client = new Twilio({
            from: '+14062008822', //14062008822 //14062008822
            sid: 'AC59d78afa066210bf6068afcc5c5f62c0',
            token: 'ab2a3f921e0d193c800e4b8ea8a5588a'
        });
client.sendSMS({
  to: '+14063708271',
  body: 'New LYSTIFY Lead '+ argument.siteURL + ' e:'+argument.email+ ' p:'+argument.phoneNumber + ' notes:' + argument.useCase
});
  }
});
