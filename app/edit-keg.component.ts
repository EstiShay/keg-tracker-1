import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
        <div *ngIf="selectedKeg">
          <h3>{{selectedKeg.name}}</h3>
          <h3>Edit Keg</h3>
          <label>Enter Keg name:</label>
          <input [(ngModel)]="selectedKeg.name">
          <label>Enter Keg brand:</label>
          <input [(ngModel)]="selectedKeg.brand">
          <label>Enter Keg price:</label>
          <input [(ngModel)]="selectedKeg.price">
          <label>Enter Keg alcohol content:</label>
          <input [(ngModel)]="selectedKeg.alcoholContent">
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
