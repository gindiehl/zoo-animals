import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="showEdit">
      <div>
        <input class="form-control input-lg" placeholder="SPECIES" [(ngModel)]="editAnimal.species">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="NAME" [(ngModel)]="editAnimal.name">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="AGE" type="number" [(ngModel)]="editAnimal.age">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="DIET" [(ngModel)]="editAnimal.diet">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="NATIVE REGION" [(ngModel)]="editAnimal.native">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="LOCATION" [(ngModel)]="editAnimal.location">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="CARETAKERS" type="number" [(ngModel)]="editAnimal.caretakers">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="SEX" [(ngModel)]="editAnimal.sex">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="LIKES" [(ngModel)]="editAnimal.likes">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="DISLIKES" [(ngModel)]="editAnimal.dislikes">
      </div>
      <div>
        <input class="form-control input-lg" placeholder="CONSERVATION STATUS" [(ngModel)]="editAnimal.status">
      </div>
    </div>

    <button (click)="showEdit = !showEdit" class="btn">
      {{showEdit? "DONE": "EDIT"}}
    </button>

  `
})

export class EditAnimalComponent {
  @Input() editAnimal: Animal;

}
