import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addProject: function () {

      // Create new Project
      var newProject = this.store.createRecord('project', {
        name: this.get('name'),
        description: this.get('description')
      });

      // Save to Firebase
      newProject.save();

      // Clear form after submit
      this.setProperties({
        name: '',
        description: ''
      });

      this.transitionTo('index');
    }
  }
});
