import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PetForm extends Component {
  @tracked name = undefined;
  @tracked dob = undefined;
  @tracked species = undefined;

  @action
  handleSubmit(event: Event) {
    event.preventDefault();

    const body = {
      name: this.name,
      dob: this.dob,
      species: this.species,
    };

    console.log('body', body);
  }
}
