import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h1>Admit New Animal</h1>
    <div>
      <input class="form-control input-lg" placeholder="SPECIES" #newSpecies>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="NAME" #newName>
    </div>
    <div>
      <input class="form-control input-lg" type="number" placeholder="AGE" #newAge>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="DIET" #newDiet>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="NATIVE REGION" #newNative>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="ZOO LOCATION" #newLocation>
    </div>
    <div>
      <input class="form-control input-lg" type="number" placeholder="NUMBER OF CARETAKERS" #newCaretakers>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="SEX" #newSex>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="LIKES" #newLikes>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="DISLIKES" #newDislikes>
    </div>
    <div>
      <input class="form-control input-lg" placeholder="CONSERVATION STATUS" #newStatus>
    </div>
    <br>
    <button class="btn btn-success" (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newNative.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value, newStatus.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newNative.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value=''; newStatus.value='';">Admit New Animal</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, native: string, location: string, caretakers: number , sex: string, likes: string, dislikes: string, status: string){
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, native, location, caretakers, sex, likes, dislikes, status);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
