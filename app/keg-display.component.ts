import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-display',
  template: `
  <ul>
    <li *ngFor='let currentKeg of childKegList'>{{currentKeg.name}}<button (click)="editButtonHasBeenClicked(currentTask)">Edit!</button></li>
  </ul>
  `
})

export class KegDisplayComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }
}
