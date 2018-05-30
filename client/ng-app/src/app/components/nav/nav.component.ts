import { AuthService } from './../../services/auth.service'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  public menuList: ImenuList = {
    home: 'Notatki',
    login: 'Logowanie',
    register: 'Rejestracja',
    profile: 'Dodaj Notatkę',
    logout: 'Wyloguj'
  }

  constructor(private router: Router, private authService: AuthService) {}

  androidUrl = `${this.authService.prodUrl}server/android`
  messageLogOut = ['', '']
  openList = false

  animationPage(router, a, b) {
    this.messageLogOut = [a, b]
    const navSuccessMessageContainer = document.getElementById(
      'navSuccessMessageContainer'
    )
    const navSuccessMessage = document.getElementById('navSuccessMessage')
    const nav = document.getElementById('page')

    nav.classList.remove('opacity-1')
    nav.classList.add('opacity-0')

    setTimeout(() => {
      navSuccessMessageContainer.classList.remove('hidden')
      navSuccessMessage.classList.remove('opacity-0')
      navSuccessMessage.classList.add('opacity-1')
    }, 500)

    setTimeout(() => {
      navSuccessMessage.classList.remove('opacity-1')
      navSuccessMessage.classList.add('opacity-0')
    }, 1500)

    setTimeout(() => {
      navSuccessMessageContainer.classList.add('hidden')
    }, 2000)

    setTimeout(() => {
      this.router.navigate([router])
      nav.classList.add('opacity-1')
    }, 2000)
  }

  routerLink(id) {
    document.querySelector(`#${id}`).classList.add('animation-click')
    const accountListContainer = document.getElementById('accountListContainer')
    const accountList = document.getElementById('accountList')
    const page = document.getElementById('page')

    if (id === 'logout') {
      this.authService.url = id
      accountList.classList.remove('opacity-1')
      accountList.classList.add('opacity-0')

      setTimeout(() => {
        accountListContainer.classList.add('hidden')
        this.openList = false
        document.querySelector(`#${id}`).classList.remove('animation-click')
        page.classList.remove('opacity-0')
        page.classList.add('opacity-1')
      }, 500)
    } else {
      if (this.authService.url !== id) {
        this.authService.url = id

        accountList.classList.remove('opacity-1')
        accountList.classList.add('opacity-0')

        setTimeout(() => {
          accountListContainer.classList.add('hidden')
          this.openList = false
          document.querySelector(`#${id}`).classList.remove('animation-click')
          this.router.navigate([`${id}`])
        }, 500)
      } else {
        this.authService.url = id
        accountList.classList.remove('opacity-1')
        accountList.classList.add('opacity-0')

        setTimeout(() => {
          accountListContainer.classList.add('hidden')
          this.openList = false
          document.querySelector(`#${id}`).classList.remove('animation-click')
          page.classList.remove('opacity-0')
          page.classList.add('opacity-1')
        }, 500)
      }
    }
  }

  accountLink(id) {
    if (!this.openList) {
      this.openList = true

      document.querySelector(`#${id}`).classList.add('animation-click')

      setTimeout(() => {
        document.querySelector(`#${id}`).classList.remove('animation-click')
      }, 500)

      const accountListContainer = document.getElementById(
        'accountListContainer'
      )
      const accountList = document.getElementById('accountList')
      const page = document.getElementById('page')

      page.classList.remove('opacity-1')
      page.classList.add('opacity-0')

      setTimeout(() => {
        accountListContainer.classList.remove('hidden')
        accountList.classList.remove('opacity-0')
        accountList.classList.add('opacity-1')
      }, 500)
    }
  }

  onLogOut(id) {
    this.routerLink(id)
    this.authService.url = 'home'
    setTimeout(() => {
      this.authService.loguot()
      this.animationPage('home', 'Zostałeś', 'Wylogowany')
    }, 500)
  }

  loggedIn() {
    return this.authService.logged
  }

  ngOnInit() {}
}

interface ImenuList {
  home: string
  login: string
  register: string
  profile: string
  logout: string
}
