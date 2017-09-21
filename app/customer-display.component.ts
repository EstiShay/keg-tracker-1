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
          <td><a (click)="customerNameClicked(currentCustomer)">{{currentCustomer.name}}</a></td>
          <td>{{currentCustomer.tab}}</td>
        </tr>
      </tbody>
    </table>
  `
})

export class CustomerDisplayComponent {
  @Input() childCustomerList: Customer[];
  @Input() childSelectedCustomer: Customer;
  @Output() customerClickSender = new EventEmitter();

  customerNameClicked(activeCustomer: Customer) {
    this.customerClickSender.emit(activeCustomer);
  }
}
