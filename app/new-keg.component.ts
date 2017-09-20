import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
    <h1>New Keg</h1>
    <label>Enter Keg name:</label>
    <input #newName required><br>
    <label>Enter Keg brand:</label>
    <input #newBrand required><br>
    <label>Enter Keg price:</label>
    <input #newPrice required><br>
    <label>Enter Keg alcohol content:</label>
    <input #newAlContent required><br>
    <button (click)="submitForm(newName.value,newBrand.value,newPrice.value,newAlContent.value); newName.value = ''; newBrand.value = ''; newPrice.value = ''; newAlContent.value = '';">Add</button>
  `
})


export class NewKegComponent {
@Output() newKegSender = new EventEmitter();

  submitForm(name: string, brand: string, price: number, alcoholContent: number) {
    var newKegToAdd: Keg = new Keg(name, brand, price, alcoholContent);
    this.newKegSender.emit(newKegToAdd);
  }
}
