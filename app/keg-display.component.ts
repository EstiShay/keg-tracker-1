import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
    <select class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" (change)="onChange($event.target.value, currentKeg)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="strongKegs">Strong ABV Kegs</option>
      <option value="weakKegs">Weak ABV Kegs</option>
    </select>

    <select class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" (change)="onChange2($event.target.value, currentKeg)">
      <option value="allKegs" selected="selected">All Kegs</option>
      <option value="onSaleOnly">On Sale Kegs</option>
    </select>

    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Brand</th>
          <th>Price/Pint</th>
          <th>Alcohol Content</th>
          <th>Oz Remaining</th>
          <th>Discount</th>
          <th>Edit Details</th>
          <th colspan="2">Pour</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor='let currentKeg of childKegList | Sale:filterBySale | ABV:filterByABV'>
          <td>{{currentKeg.name}}</td>
          <td>{{currentKeg.brand}}</td>
          <td>{{currentKeg.price}}<span class="glyphicon glyphicon-asterisk" *ngIf="currentKeg.onSale===true"></span></td>
          <td>{{currentKeg.alcoholContent}}</td>
          <td>{{currentKeg.volume}}</td>
          <td><input type="number" color="black" max="50" min="0" (change)="applyDiscount(currentKeg, $event.target.value)">%</td>
          <td><button class="btn btn-info" (click)="editButtonHasBeenClicked(currentKeg)">Edit</button></td>
          <td><button class="btn btn-info" (click)="pintButtonHasBeenClicked(currentKeg)">Pint</button></td>
          <td><button class="btn btn-info" (click)="growlerButtonHasBeenClicked(currentKeg)">Growler</button></td>
        </tr>
      </tbody>
    </table>
  `
})

export class KegDisplayComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  filterByABV: string = "allKegs";
  filterBySale: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  applyDiscount(kegToDiscount: Keg, discount){
    kegToDiscount.onSale = true;
    kegToDiscount.price = kegToDiscount.price * (1-(discount/100))
  }

  pintButtonHasBeenClicked(kegToPour: Keg) {
    kegToPour.volume -= 16;
    if(kegToPour.volume <= 160){
      alert('Running low on' + kegToPour.name);
    }
  }

  growlerButtonHasBeenClicked(kegToPour: Keg) {
    kegToPour.volume -= 64;
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

  onChange2(optionFromMenu){
    this.filterBySale = optionFromMenu;
  }
}
