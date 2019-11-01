export class LoginForm {
    public nickName: string;
    public password: string;
  
    constructor() { }
    buildLoginForm(nickName: string, password: string): LoginForm {
  
      let loginForm = new LoginForm();
      loginForm.nickName = nickName;
      loginForm.password = password;
      return loginForm;
    }
  }