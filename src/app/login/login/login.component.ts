import { Component, OnInit } from '@angular/core';
import { LoginForm } from './loginForm';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nickName: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  setNickName(nickName: string) {
    this.nickName = nickName;
  }
  setPassword(password: string) {
    this.password = password;
  }
  cleanVars() {
    this.nickName = "";
    this.password = "";
  }
  login(nickName: string, password: string) {
    let login = new LoginForm().buildLoginForm(this.nickName, this.password);
  //   this.authenticationService.autenthication(login).subscribe(data => {
    
  //   if (data.validateUser != false) {
  //     this.authenticationService.getUserByLogin(login).subscribe(opc => {
  //       this.user = opc;
  //     });
  //     this.router.navigate(["/home/app-graphics-home"]);
  //   }
  //   else {
  //     window.alert("Usuario o contraseña incorrectos, favor de validar");
  //     this.router.navigate(["/login"]);
  //     this.cleanVars();
  //   }
  // });
}

}
