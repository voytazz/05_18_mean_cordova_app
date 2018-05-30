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

  label = {
    header: 'Rejestracja',
    login: 'Login',
    password: 'Hasło',
    submit: 'Zarejestruj'
  }

  message = ['Jesteś', 'Zarejestrowany']
  registredSuccess = false

  constructor(private authService: AuthService, private router: Router) {}

  animationInit() {
    const register = document.getElementById('page')
    setTimeout(() => {
      register.classList.remove('opacity-0')
      register.classList.add('opacity-1')
    }, 500)
  }

  animationPage(router, a, b) {
    this.message = [a, b]
    const successMessageContainer = document.getElementById(
      'successMessageContainer'
    )
    const successMessage = document.getElementById('successMessage')
    const register = document.getElementById('page')

    register.classList.remove('opacity-1')
    register.classList.add('opacity-0')

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
      this.authService.url = router
      this.router.navigate([router])
      register.classList.add('opacity-1')
    }, 2000)
  }

  onRegisterSubmit() {
    document
      .querySelector('input[type=submit]')
      .classList.add('animation-click')

    const user = {
      nick: this.nick,
      password: this.password
    }

    this.authService.postHttp(user, 'server/register').subscribe(data => {
      if (data.success) {
        this.animationPage('login', 'Jesteś', 'Zarejestrowany')
      } else {
        this.animationPage('register', 'Wystąpił', 'Błąd')
      }
    })
  }

  ngOnInit() {
    this.animationInit()
  }
}
