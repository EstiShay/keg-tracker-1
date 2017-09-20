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

  <ul>
  <li [class]="priceColor(currentKeg)" *ngFor='let currentKeg of childKegList | ABV:filterByABV'>{{currentKeg.name}}     <span id="volume">{{currentKeg.volume}}</span>

    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
    <button (click)="pourButtonHasBeenClicked(currentKeg)">Pour!</button>
    </li>
  </ul>
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
