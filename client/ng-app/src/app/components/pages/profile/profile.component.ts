import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { AuthService } from '../../../services/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {
  subject: string
  title: string
  content: string

  message = ['Wysłano', 'Notatkę']

  constructor(private authService: AuthService, private router: Router) {}

  animationInit() {
    const profile = document.getElementById('page')
    setTimeout(() => {
      profile.classList.remove('opacity-0')
      profile.classList.add('opacity-1')
    }, 500)
  }

  animationPage(router, a, b) {
    const successMessageContainer = document.getElementById(
      'successMessageContainer'
    )
    const successMessage = document.getElementById('successMessage')
    const profile = document.getElementById('page')

    profile.classList.remove('opacity-1')
    profile.classList.add('opacity-0')

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
      this.router.navigate([router])
    }, 2000)
  }

  onAddNoteSubmit() {
    document
      .querySelector('input[type=submit]')
      .classList.add('animation-click')
    const user = JSON.parse(localStorage.getItem('user'))

    const note = {
      title: this.title,
      content: this.content,
      subject: this.subject,
      user: user
    }
    const successMessageContainer = document.getElementById(
      'successMessageContainer'
    )
    const successMessage = document.getElementById('successMessage')
    const profile = document.getElementById('page')

    this.authService.sendNote(note).subscribe(data => {
      this.authService.url = 'home'
      this.animationPage('home', 'Wysłano', 'Notatkę')
    })
  }

  ngOnInit() {
    this.animationInit()
  }
}
