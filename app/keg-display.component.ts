import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
  <select (change)="onChange($event.target.value)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="strongKegs">Strong ABV Kegs</option>
      <option value="weakKegs">Weak ABV Kegs</option>
    </select>

    <table class="table table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Brand</th>
        <th>Price</th>
        <th>Alcohol Content</th>
      </tr>
    </thead>
    <tbody>



  <tr *ngFor='let currentKeg of childKegList | ABV:filterByABV'>
  <td>{{currentKeg.name}}</td>
  <td>{{currentKeg.brand}}</td>
  <td>{{currentKeg.price}}</td>
  <td>{{currentKeg.alcoholContent}}</td>
  </tr>


  </tbody>
  </table>

    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    <button (click)="pourButtonHasBeenClicked(currentKeg)">Pour!</button>

  `
})

export class KegDisplayComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByABV: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pourButtonHasBeenClicked(kegToPour: Keg) {
    kegToPour.volume -= 16;
    if(kegToPour.volume <= 160){
      alert('Running low on' + kegToPour.name);
    }
  }

  priceColor(currentKeg: Keg){
    if(currentKeg.price >= 8) {
      return "bg-success";
    }

  }

  onChange(optionFromMenu){
    this.filterByABV = optionFromMenu;
  }
}
