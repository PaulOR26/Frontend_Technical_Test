import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | add-movie-form', function (hooks) {
  setupRenderingTest(hooks);

  test('title label has the correct text', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#add-movie-title-label').hasText('Title');
  });

  test('description label has the correct text', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#add-movie-description-label').hasText('Description');
  });

  test('title input has the correct placeholder', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert.dom('#add-movie-title-input').hasAttribute('placeholder', 'Title..');
  });

  test('description input has the correct placeholder', async function (assert) {
    await render(hbs`<AddMovieForm />`);

    assert
      .dom('#add-movie-description-input')
      .hasAttribute('placeholder', 'Description..');
  });
});
