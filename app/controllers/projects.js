import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    deleteProject: function(id){
      this.store.findRecord('project', id).then(function(project){
        project.deleteRecord();

        project.save();
      });
    }
  }
});