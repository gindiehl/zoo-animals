import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <div class="jumbotron">
      <h1>ZOO ANIMALS</h1>
    </div>
    <div class="col-md-6">
      <new-animal></new-animal>
    </div>
    <ul class="col-md-6">
      <animal-list></animal-list>
    </ul>   
 </div>
  `
})

export class AppComponent {

}
