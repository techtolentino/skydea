import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    return this.get("session").fetch().catch(function() {});
  },

  actions: {
    signIn: function(provider) {
      this.get("session").open("firebase", {
        provider: 'password',
        email: 'test@example.com',
        password: 'password1234'
      }).then(function(data) {
        console.log(data.currentUser);
      });
    },

    signOut: function() {
      this.get("session").close();
    }
  }
});
