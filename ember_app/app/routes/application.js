import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.findAll('movie');
  },

  actions: {
    post(newMovie) {
      this.store.createRecord('movie', newMovie).save();
    },
    delete(movie) {
      console.log(movie);
      movie.destroyRecord();
    },
    update(updatedMovie) {
      this.store.findRecord('movie', updatedMovie.id).then(function(model) {
        model.setProperties(updatedMovie);
        model.save();
      });
    }
  }
});
