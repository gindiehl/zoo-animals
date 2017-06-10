import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

    <select (change)="ageSort($event.target.value)">
      <option value="allAnimals">All Animals</option>
      <option value="youngAnimals">Young Animals</option>
      <option value="matureAnimals">Mature Animals</option>
    </select>

    <ul>
      <li *ngFor="let animal of childAnimalList | age:filterByAge; let i-index" class="row"><animal-detail [detailAnimal]="animal" [detailIndex]="i"></animal-detail>
      </li>
    </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  animal: Animal;

  filterByAge: string = "allAnimals";

  ageSort(menuOption: string) {
    this.filterByAge = menuOption;
  }

}
