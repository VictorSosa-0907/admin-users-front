import { Component, OnInit, Input, OnChanges, EventEmitter, SimpleChanges, Output } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit, OnChanges {
  @Input() userDetail: User;
  @Input() phones: string[];
  @Input() deptos: string[];
  clearDetail = new EventEmitter<any>();
  id: number;
  name: string;
  paterno: string;
  materno: string;
  address: string;
  mail: string;
  constructor() {
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes["userDetail"] != undefined) {
      if (changes["userDetail"].currentValue != undefined) {
        this.viewUser(changes["userDetail"].currentValue);
      }
    }
  }
  viewUser(user: User): void {
    this.id = user.id;
    this.name = user.name;
    this.paterno = user.paterno;
    this.materno = user.materno;
    this.address = user.address;
    this.mail = user.mail;
  }
  clearModal() {
    this.clearDetail.emit();
  }

}
