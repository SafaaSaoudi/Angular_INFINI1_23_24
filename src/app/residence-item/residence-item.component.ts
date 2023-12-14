import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Residence } from '../Core/Models/residence';

@Component({
  selector: 'app-residence-item',
  templateUrl: './residence-item.component.html',
  styleUrls: ['./residence-item.component.css']
})
export class ResidenceItemComponent {

  @Input() residence!: Residence;
  @Output() E=new EventEmitter();

  deleteFromParent() {
    this.E.emit(this.residence);
  }
}
