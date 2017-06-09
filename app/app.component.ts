import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>ZOO ANIMALS</h1>
    </div>
    <div class="col-md-6">
      <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    </div>
    <ul class="col-md-6">
      <animal-list [childAnimalList]="masterAnimalList" (ngOnInit)="ngOnInit(masterAnimalList)"></animal-list>
    </ul>
 </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Arctic Fox', 'Moon', 2, 'Carnivore', 'Arctic Tundra of Northern Hemisphere', 'Northern Trail', 5, 'Female', 'Cool shade', 'Loud noises', 'Least Concern(LC)'),
    new Animal('Ocelot', 'Prince', 4, 'Carnivore', 'South America', 'Tropical Rainforest Building', 6, 'male', 'Napping in the sunshine', 'Toys that are not rope-based', 'LC'),
    new Animal('Northwest Black Tailed Deer', 'Tinkerbell', 8, 'Herbivore', 'Pacific NW US & Canada', 'Northern Trail', 2, 'Female', 'Delicate roots and leaves', 'Sudden movement', 'LC')
  ];

}
