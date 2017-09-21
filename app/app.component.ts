import { Component } from '@angular/core';
import { Keg } from './keg.model';
import { SaleRecord } from './saleRecord.model';
import { Customer } from './customer.model';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
})

export class AppComponent {
  selectedKeg = null;
  selectedCustomer = null;

  masterKegsList: Keg[] = [
    new Keg('Shiner Bock', 'Shiner', 5, 5.8),
    new Keg('Modelo Negra', 'Modelo', 10, 6.6),
    new Keg('Miller High Life', 'Miller', 1.5, 5)
  ];

  masterCustomerList: Customer[] = [
    new Customer('Trevor Gill', 10, [])
  ];

  editKeg(clickedKeg) {
    console.log(clickedKeg);
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegsList.push(newKegFromChild);
  }

  editCustomer(clickedCustomer){
    console.log(clickedCustomer);
    this.selectedCustomer = clickedCustomer;
  }

}
