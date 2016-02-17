// This come to remove the old
//Future = Npm.require('fibers/future');
//Recurly = Meteor.npmRequire('recurly-js'); or if you use meteorhacks:npm
import Future from 'fibers/future';
import Recurly from 'recurly-js';

const RECURLY_SETTINGS = Meteor.settings.recurly;


Meteor.methods({
  CreateSubscriptionAndAccount: (options) => {
    check([options], [Object]);
    let recurlyFuture = new Future(),
      recurly = new Recurly(RECURLY_SETTINGS);
    recurly.subscriptions.create(options.subscription,
      function(error, subscription) {
        if (error) {
          return recurlyFuture.return(error.statusCode);
        } else {
          return recurlyFuture.return(subscription);
        }
      });
    return recurlyFuture.wait();
  }
});
