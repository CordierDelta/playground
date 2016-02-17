Meteor.startup(() => {
  recurly.configure({
    publicKey: Meteor.settings.public.publicRecurlyKey
  });
});
