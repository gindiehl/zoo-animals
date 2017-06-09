import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-detail',
  template: `
    <div class="row">
      <div class="col-sm-6">
        <h3 (click)="showDetails = !showDetails">{{detailAnimal.species}}</h3>
      </div>
    </div>
    <div *ngIf="showDetails" class="row">
      <ul class="col-sm-6">
        <li><b>Name:</b> {{detailAnimal.name}}</li>
        <li><b>Age:</b> {{detailAnimal.age}}</li>
        <li><b>Diet:</b> {{detailAnimal.diet}}</li>
        <li><b>Native Region:</b> {{detailAnimal.native}}</li>
        <li><b>Location:</b> {{detailAnimal.location}}</li>
        <li><b>Number of Caretakers:</b> {{detailAnimal.caretakers}}</li>
        <li><b>Sex:</b> {{detailAnimal.sex}}</li>
        <li><b>Likes:</b> {{detailAnimal.likes}}</li>
        <li><b>Dislikes:</b> {{detailAnimal.dislikes}}</li>
        <li><b>Conservation Status:</b> {{detailAnimal.status}}</li>
      </ul>
    </div>
  `
})

export class AnimalDetailComponent {
  @Input() detailAnimal: Animal;
  @Input() detailIndex: number;

}
