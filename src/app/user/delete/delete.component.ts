import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../models/user';
import { UserService } from 'src/app/core/service/user.service';
import { Response } from 'src/app/user/models/Response';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit, OnChanges {
  @Input() userDelete: User;
  clearDelete = new EventEmitter<any>();
  code: number;
  response: Response;
  id: number;
  name: string;
  paterno: string;
  materno: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes["userDelete"] != undefined) {
      if (changes["userDelete"].currentValue != undefined) {
        this.viewUser(changes["userDelete"].currentValue);
      }
    }
  }
  viewUser(user: User): void {
    this.id = user.id;
    this.name = user.name;
    this.paterno = user.paterno;
    this.materno = user.materno;
    this.response = new Response();
  }
  deleteUser(user: User) {
    this.userService.deleteUser(user.id).subscribe(u => {
      console.log(u);
      this.code = u.code;
      this.response = u;
    });
  }
  clearModal() {
    this.clearDelete.emit();
  }

}
