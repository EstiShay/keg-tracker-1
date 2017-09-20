import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "ABV",
  pure: false
})


export class ABVPipe implements PipeTransform {

  transform(input: Keg[], desiredABV) {
    var output: Keg[] = [];
    if(desiredABV === "allKegs") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].alcoholContent != 0){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredABV === "strongKegs") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].alcoholContent >= 7.5){
            output.push(input[i]);
    }
  }
  return output;
    } else if (desiredABV === "weakKegs") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].alcoholContent < 7.5){
            output.push(input[i]);
    }
  }
return output;

} else {
  return input;
}
}
}
