import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    editProject: function (id) {
      var self = this;
      // Create new Project
      var  name = this.get('model.name');
      var  description = this.get('model.description');
      var  userName = this.get('model.userName');

      // Update Project
      this.store.findRecord('project', id).then(function(project) {
        project.set('name', name);
        project.set('description', description);
        project.set('userName', userName);

        // Save to Firebase 
        project.save();

        self.transitionTo('projects');
      });
    }
  }
});
