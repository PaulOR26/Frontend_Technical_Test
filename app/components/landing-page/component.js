import { action } from '@ember/object';
import { collection, getFirestore, getDocs } from 'firebase/firestore';
import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
import podNames from 'ember-component-css/pod-names';

export default class LandingPage extends Component {
  styleNamespace = podNames['landing-page'];

  @tracked movies;

  @tracked sortOrder;

  @action async loadMovies(hasSortChanged, event) {
    if (hasSortChanged) this.sortOrder = event.target.value;

    const db = getFirestore();
    const moviesRef = collection(db, 'movies');
    const moviesSnapshot = await getDocs(moviesRef);
    const movies = [];
    const { sortOrder } = this;

    moviesSnapshot.forEach((doc) => movies.push(doc));

    this.movies = movies;

    if (sortOrder === 'Ascending') {
      this.movies.sort((a, b) => a.data().rating - b.data().rating);
    } else if (sortOrder === 'Descending') {
      this.movies.sort((a, b) => b.data().rating - a.data().rating);
    }
  }

  constructor(owner, args) {
    super(owner, args);

    this.loadMovies();
  }
}
