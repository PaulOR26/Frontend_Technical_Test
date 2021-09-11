import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { updateDoc } from 'firebase/firestore';
import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';

export default class MovieListItem extends Component {
  styleNamespace = podNames['movie-list/movie-list-item'];

  @tracked newTitle;

  @tracked isEditing = false;

  @tracked errorMessage;

  @action handleIsEditing() {
    this.isEditing = !this.isEditing;
  }

  @action async editMovie(event) {
    event.preventDefault();

    this.errorMessage = undefined;

    try {
      const { newTitle } = this;

      await updateDoc(this.args.movie.ref, {
        title: newTitle,
      });

      this.newTitle = undefined;

      this.args.loadMovies();
    } catch (error) {
      this.errorMessage = error?.message;
    }
  }

  get movie() {
    return this.args.movie.data();
  }
}
