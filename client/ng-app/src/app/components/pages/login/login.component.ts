import { Router } from '@angular/router'
import { AuthService } from './../../../services/auth.service'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  nick: string
  password: string
  submit: string

  constructor(private authService: AuthService, private router: Router) {
    this.submit = 'submit'
  }

  onLoginSubmit() {
    const user = {
      nick: this.nick,
      password: this.password
    }

    this.authService.postHttp(user, 'server/login').subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user)
        console.log(user)
        console.log(data)
        this.router.navigate(['profile'])
      } else {
        console.log(data)
        this.router.navigate(['login'])
      }
    })
  }

  ngOnInit() {}
}
