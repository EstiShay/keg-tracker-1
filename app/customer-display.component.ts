import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from './customer.model';

@Component({
  selector: 'customer-display',
  template: `


    <table class="table table-hover">
      <thead>
        <tr>
          <th>Name</th>
          <th>Tab</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor='let currentCustomer of childCustomerList'>
          <td>{{currentCustomer.name}}</td>
          <td>{{currentCustomer.tab}}</td>
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
