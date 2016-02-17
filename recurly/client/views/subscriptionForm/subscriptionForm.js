const SUBSCRIPTION_FIXED_PRICE = 1500;

Template.subscriptionForm.events({
  "submit #subscription-recurly-test": (event, template) =>{
     event.preventDefault();
     let formElement = $('#subscription-recurly-test'),
         proceed = true;
    if(proceed){
      //You could add any form validation here
      recurly.token(formElement, (error, token) =>{
        if(error){
          console.log(`${error}`);
          console.log(error);
        }else{
          Meteor.call('CreateSubscriptionAndAccount',{
            subscription: {
                plan_code: 'some-plan-thing-here-1',
                currency: 'USD',
                unit_amount_in_cents: SUBSCRIPTION_FIXED_PRICE,
                account: {
                  account_code: 123456, // you could use Meteor.userId();
                  username: 'testuser', //you could use Meteor.user().username;
                  email: 'email', // you could use Meteor.user().emails[0].address
                  first_name: template.$('#first_name').val(),
                  last_name: template.$('#last_name').val(),
                  billing_info: {
                    token_id: token.id
                  }
                }
              }
          }, callback);
        }
      });
    }else{
      //Some Validation Failed
    }
  }
});

Template.subscriptionForm.helpers({
  months: () => {
    return EXP_MONTHS();
  },
  years: () => {
    return EXP_YEAR();
  }
});

Template.subscriptionForm.onRendered(() => {
  Meteor.setTimeout(function() {
    $('select').material_select();
  }, 0);
});
