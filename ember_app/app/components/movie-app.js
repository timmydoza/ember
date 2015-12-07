import Ember from 'ember';

export default Ember.Component.extend({
  newMovie: {},
  editing: false,
  tempMovie: {},
  actions: {
    post() {
      var newMovie = this.get('newMovie');
      this.sendAction('unicorn', newMovie);
      this.set('newMovie', {});
    },
    delete(movie) {
      this.sendAction('delete', movie);
    },
    edit(movie) {
      this.set('tempMovie', {
        title: movie.get('title'),
        year: movie.get('year'),
        director: movie.get('director'),
        actor: movie.get('actor'),
        id: movie.get('id')
      });
      this.set('newMovie', this.get('tempMovie'));
      this.set('editing', true);
    },
    cancelEdit() {
      this.set('newMovie', {});
      this.set('editing', false);
    },
    submitEdit(movie) {
      this.sendAction('update', movie);
      this.set('editing', false);
    }
  }
});
