import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  user: {}

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.getProfile().subscribe(
      profile => {
        this.user = profile.user
        console.log(profile)
        console.log(this.user)
      },
      err => {
        console.log(err)
        return false
      }
    )
  }
}
