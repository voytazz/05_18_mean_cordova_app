import { Router } from '@angular/router'
import { AuthService } from './../../../services/auth.service'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  nick: string
  password: string

  constructor(private authService: AuthService, private router: Router) {}

  onRegisterSubmit() {
    const user = {
      nick: this.nick,
      password: this.password
    }

    this.authService.postHttp(user, 'server/register').subscribe(data => {
      if (data.success) {
        console.log(data)
        this.router.navigate(['/login'])
      } else {
        console.log(data)
        this.router.navigate(['/register'])
      }
    })
  }

  ngOnInit() {}
}
