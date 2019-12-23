import { Component, OnInit, Output, Input } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { Response } from './models/Response';
import { User } from './models/user';
import { CataloguesService } from '../core/service/catalogues.service';
import { Deptos } from './models/Deptos';
import { Column, GridOption, AngularGridInstance, FieldType, Editors, Formatters, OnEventArgs, Filters, GridOdataService } from 'angular-slickgrid';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  response: Response[];
  userlist: User[];
  deptos: Deptos[];
  user: User;
  dphones: string[];
  ddeptos: string[];
  phones: string[];
  loading: boolean;

  constructor(private userService: UserService) {
    this.loading = true;
  }

  ngOnInit() {
    this.getAllUsers();
    this.loadUsers();
  }
  //Cuando el Back responde me manda un response 
  //pero el contenido viene en el generico "data"
  getAllUsers(): void {
    this.userService.getUsers().subscribe(usr => {
      this.userlist = usr.data;
    });
  }

  saveUser(user: User) {
    this.userService.saveUser(user);
  }

  setUser(usr: User) {
    this.user = usr;
  }
  getUserById(u: number) {
    this.userService.getUsersById(u).subscribe(usr => {
      this.user = usr.data;
      this.dphones = this.user.phones;
      this.ddeptos = this.user.department;
    });
  }

  clearUserEdit(){
    this.user = undefined;
  }

  loadUsers(): void {
    this.userlist = [];
    let u: User;
    this.userService.getUsers().subscribe(value => {
      value.data.forEach(element => {
        u = element;
        const itemGeneral = new User();
        this.userlist.push(itemGeneral);
      });
      this.loading = false;
    });
  }
  
}