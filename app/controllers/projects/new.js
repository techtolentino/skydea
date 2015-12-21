import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addProject: function () {
      var newProject = this.store.createRecord('project', {
        name: this.get('name'),
        description: this.get('description')
      });
      newProject.save();
      this.setProperties({
        name: '',
        description: ''
      });
    }
  }
});
