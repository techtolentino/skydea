import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editProject: function (id) {
      var self = this;
      // Create new Project
      var  name = this.get('model.name');
      var  description = this.get('model.description');

      // Update Project
      this.store.findRecord('project', id).then(function() {
        project.set('name', name);
        project.set('description', description);

        // Save to Firebase 
        project.save();

        self.transitionTo('projects');
      });
    }
  }
});
