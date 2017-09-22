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
  activeKeg = null;

  masterKegsList: Keg[] = [
    new Keg('Shiner Bock', 'Shiner', 5, 5.8),
    new Keg('Modelo Negra', 'Modelo', 10, 6.6),
    new Keg('Miller High Life', 'Miller', 1.5, 5)
  ];

  masterCustomerList: Customer[] = [
    new Customer('Trevor Gill', 10, [])
  ];

  pourThisLadAPint(passedKeg: Keg) {
    this.activeKeg = passedKeg;
    this.selectedCustomer.tab += this.activeKeg.price;
    this.activeKeg.volume -= 16;
    if(this.activeKeg.volume <= 160){
      alert('Running low on' + this.activeKeg.name);
    }
  }

  pourThisLadAGrowler(passedKeg: Keg) {
    this.activeKeg = passedKeg;
    this.selectedCustomer.tab += (this.activeKeg.price * 4) ;
    this.activeKeg.volume -= 16;
    if(this.activeKeg.volume <= 160){
      alert('Running low on' + this.activeKeg.name);
    }
  }

  // pintButtonHasBeenClicked(kegToPour: Keg,childSelectedCustomer) {
  //   childSelectedCustomer.tab += 1;
  //   kegToPour.volume -= 16;
  //   if(kegToPour.volume <= 160){
  //     alert('Running low on' + kegToPour.name);
  //   }
  // }

  // growlerButtonHasBeenClicked(kegToPour: Keg) {
  //   kegToPour.volume -= 64;
  //   if(kegToPour.volume <= 160){
  //     alert('Running low on' + kegToPour.name);
  //   }
  // }

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
    this.selectedCustomer = clickedCustomer;
    console.log(this.selectedCustomer);
  }

}
