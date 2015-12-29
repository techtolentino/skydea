import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addProject: function () {

      var self = this;

      // Create new Project
      var newProject = this.store.createRecord('project', {
        name: this.get('name'),
        description: this.get('description'),
        userName: this.get('userName')
      });

      // Save to Firebase
      newProject.save();

      // Clear form after submit
      this.setProperties({
        name: '',
        description: '',
        userName: ''
      });

      self.transitionTo('projects');
    }
  }
});
