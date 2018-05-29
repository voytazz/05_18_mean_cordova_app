import { AuthService } from './../../services/auth.service'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  encapsulation: ViewEncapsulation.None
})
export class NavComponent implements OnInit {
  public loggedIn = false

  public menuList: ImenuList = {
    home: 'Home',
    login: 'Login',
    register: 'Register',
    profile: 'Profile',
    logout: 'Logout'
  }
  constructor(private router: Router, private authService: AuthService) {}

  routerLink(event) {
    console.log(event.toElement.id)
    this.router.navigate([`${event.toElement.id}`])
  }

  showList(menu) {
    console.log(menu)
  }

  onLogOut() {
    this.authService.loguot()
    this.router.navigate(['home'])
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
