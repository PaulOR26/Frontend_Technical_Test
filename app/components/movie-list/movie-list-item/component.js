import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { updateDoc, deleteDoc } from 'firebase/firestore';
import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';

export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @tracked newTitle = this.movie.title;

  @tracked newDescription = this.movie.description;

  @tracked newRating = this.movie.rating;

  @tracked isEditing = false;

  @tracked errorMessage;

  @action onSelectNewRating(value) {
    this.newRating = value;
  }

  @action handleIsEditing() {
    this.isEditing = !this.isEditing;
  }

  @action handleCancelEdit() {
    const { title, description, rating } = this.movie;

    this.isEditing = !this.isEditing;

    this.newTitle = title;
    this.newDescription = description;
    this.newRating = rating;
  }

  @action async editMovie(event) {
    event.preventDefault();

    this.errorMessage = undefined;

    try {
      const { newTitle, newDescription, newRating } = this;
      const { title, description, rating } = this.movie;

      await updateDoc(this.args.movie.ref, {
        title: newTitle,
        description: newDescription,
        rating: newRating,
      });

      this.newTitle = title;
      this.newDescription = description;
      this.newRating = rating;

      this.args.loadMovies();
    } catch (error) {
      this.errorMessage = error?.message;
    }
  }

  @action async deleteMovie() {
    this.errorMessage = undefined;

    try {
      await deleteDoc(this.args.movie.ref);

      this.args.loadMovies();
    } catch (error) {
      this.errorMessage = error?.message;
    }
  }

  get movie() {
    return this.args.movie.data();
  }
}
