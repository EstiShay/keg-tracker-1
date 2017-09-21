import { Component } from '@angular/core';
import { Keg } from './keg.model';
import { SaleRecord } from './saleRecord.model';
import { Customer } from './customer.model';
import { FormsModule } from '@angular/forms';


@Component({
  // moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app/app.component.html'
  // template: `
  // <h1>Our Kegs</h1>
  // <div class="container">
  //   <ul>
  //     <li *ngFor='let myKeg of kegs'>{{myKeg.name}}</li>
  //   </ul>
  //
  //
  // </div>
  //
  // `
})

export class AppComponent {
  selectedKeg = null;

  masterKegsList: Keg[] = [
    new Keg('Shiner Bock', 'Shiner', 5, 5.8),
    new Keg('Modelo Negra', 'Modelo', 10, 6.6),
    new Keg('Miller High Life', 'Miller', 1.5, 5)
  ];

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegsList.push(newKegFromChild);
  }

}
