import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'edit-keg',
  template: `
    <div>
        <div *ngIf="childSelectedKeg">
          <h3>{{childSelectedKeg.name}}</h3>
          <h3>Edit Keg</h3>
          <label>Enter Keg name:</label>
          <input [(ngModel)]="childSelectedKeg.name"><br>
          <label>Enter Keg brand:</label>
          <input [(ngModel)]="childSelectedKeg.brand"><br>
          <label>Enter Keg price:</label>
          <input [(ngModel)]="childSelectedKeg.price"><br>
          <label>Enter Keg alcohol content:</label>
          <input [(ngModel)]="childSelectedKeg.alcoholContent"><br>
          <button class="btn btn-info" (click)="doneButtonClicked()">Done</button>
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
