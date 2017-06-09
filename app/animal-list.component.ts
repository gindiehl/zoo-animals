import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
    <li *ngFor="let animal of childAnimalList; let i-index" class="row">
      <animal-detail [detailAnimal]="animal" [detailIndex]="i"></animal-detail>
    </li>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  animal: Animal;

}
