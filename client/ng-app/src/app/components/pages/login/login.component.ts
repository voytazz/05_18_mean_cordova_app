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

  label = {
    header: 'Logowanie',
    login: 'Login',
    password: 'Hasło',
    submit: 'Zaloguj'
  }

  message = ['', '']
  loggedSuccess = false

  constructor(private authService: AuthService, private router: Router) {}

  animationInit() {
    const login = document.getElementById('page')
    setTimeout(() => {
      login.classList.remove('opacity-0')
      login.classList.add('opacity-1')
    }, 500)
  }

  animationPage(router, a, b) {
    this.message = [a, b]
    const successMessageContainer = document.getElementById(
      'successMessageContainer'
    )
    const successMessage = document.getElementById('successMessage')
    const login = document.getElementById('page')

    login.classList.remove('opacity-1')
    login.classList.add('opacity-0')

    setTimeout(() => {
      successMessageContainer.classList.remove('hidden')
      successMessage.classList.remove('opacity-0')
      successMessage.classList.add('opacity-1')
    }, 500)

    setTimeout(() => {
      successMessage.classList.remove('opacity-1')
      successMessage.classList.add('opacity-0')
    }, 1500)

    setTimeout(() => {
      successMessageContainer.classList.add('hidden')
    }, 2000)

    setTimeout(() => {
      this.authService.url = router
      this.router.navigate([router])
      login.classList.add('opacity-1')
    }, 2000)
  }

  onLoginSubmit() {
    document
      .querySelector('input[type=submit]')
      .classList.add('animation-click')

    if (!this.authService.logged) {
      const user = {
        nick: this.nick,
        password: this.password
      }

      this.authService.postHttp(user, 'server/login').subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user)
          this.authService.logged = true
          this.animationPage('profile', 'jesteś', 'Zalogowany')
        } else {
          this.animationPage('login', 'Wystąpił', 'Błąd')
        }
      })
    }
  }

  ngOnInit() {
    this.animationInit()
  }
}
