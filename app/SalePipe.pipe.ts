import {Pipe, PipeTransform} from '@angular/core';
import {Keg} from './keg.model';

@Pipe({
  name: "Sale",
  pure: false
})


export class SalePipe implements PipeTransform {

  transform(input: Keg[], desiredSale) {
    var output: Keg[] = [];
    if(desiredSale === "allKegs") {
      for (var i = 0; i <input.length; i++) {
        if (input[i].onSale === true || input[i].onSale === false){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredSale === "onSaleOnly") {
        for (var i = 0; i <input.length; i++) {
          if (input[i].onSale === true){
            output.push(input[i]);
    }
  }
  return output;
} else {
  return input;
}
}
}
