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
  <li *ngFor='let currentKeg of childKegList | ABV:filterByABV'>{{currentKeg.name}}

    <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
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

  onChange(optionFromMenu){
    this.filterByABV = optionFromMenu;
  }
}
