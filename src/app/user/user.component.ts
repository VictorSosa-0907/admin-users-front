import { Component, OnInit, Output } from '@angular/core';
import { UserService } from '../core/service/user.service';
import { Response } from './models/Response';
import { User } from './models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  response: Response[];
  @Output() userlist: User[];
 
 
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getAllUsers();
  }
 
  //Cuando el Back responde me manda un response 
  //pero el contenido viene en el generico "data"
  getAllUsers(): void {
    this.userService.getUsers().subscribe(usr => {
      this.userlist = usr.data;
    });
  }

  //Detalle de usuario por Id
  getUserById(user : User) {
    this.userService.getUsersById(user.id).subscribe(usr => {
      console.log(usr);
    });
  }
  //  usr = new User();
  //  idDeptos: number[] = [1, 2, 3];
  //  phones: string[] = ["1234", "5678"];
  //   usr.buildUser("jose", "sosa", "sosa", "avenida tal # 19", "jose@gmail.com", phones, idDeptos);
  //guardar usuario
  saveUser(user: User) {
    this.userService.saveUser(user);
  }
  updateUser(user: User) {
    this.userService.updateUser(user);
  }
  deleteUser(id: number) {
    this.userService.deleteUser(id);
  }
}
