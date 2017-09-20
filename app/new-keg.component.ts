import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <label>Enter Keg name:</label>
    <input #newName><br>
    <label>Enter Keg brand:</label>
    <input #newBrand><br>
    <label>Enter Keg price:</label>
    <input #newPrice><br>
    <label>Enter Keg alcohol content:</label>
    <input #newAlContent><br>
    <button (click)="submitForm(newName.value,newBrand.value,newPrice.value,newAlContent.value); newName.value = ''; newBrand.value = ''; newPrice.value = ''; newAlContent.value = '';">Add</button>
  `
})


export class NewKegComponent {
@Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: string) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
