import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "age",
  pure: false
})

export class AgePipe implements PipeTransform {
  transform(input: Animal[], selectedAge) {
    var output: Animal[] = [];
    if (selectedAge === "matureAnimals") {
      input.forEach(function animal() {
        if (animal.age > 2) {
          output.push(animal);
        }
      });
      return output;
    } else if (selectedAge === "youngAnimals") {
      input.forEach(function animal() {
        if (animal.age <= 2) {
          output.push(animal);
        }
      });
      return output;
    } else {
      return input;
    }
  }
}
