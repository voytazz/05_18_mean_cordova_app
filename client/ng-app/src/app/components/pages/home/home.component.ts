import { AuthService } from './../../../services/auth.service'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService) {}

  animationInit() {
    const home = document.getElementById('page')
    setTimeout(() => {
      home.classList.remove('opacity-0')
      home.classList.add('opacity-1')
    }, 500)
  }

  onGetAllNotes() {
    this.authService.getAllNotes().subscribe(data => {
      const output = document.querySelector('#page')

      let notes = []
      notes = data.msg

      notes.forEach(note => {
        note.date = note.date.replace('T', ' ')
        note.date = note.date.replace('Z', '')
        note.date = note.date.slice(0, -4)

        output.innerHTML += `
        <div class='note-container'>
          <h2 class='note-title'>${note.title}</h2>
          <h5 class='note-subject'>Przedmiot: ${note.subject}</h5>
          <p class='note-content'>${note.content}</p>
          <div class='note-container-autor-date'>
            <h6 class='note-author'>Autor: ${note.user.nick}</h6>
            <h6 class='note-date'>${note.date}</h6>
          </div>
        </div>`
      })
      this.animationInit()
    })
  }

  ngOnInit() {
    this.onGetAllNotes()
  }
}
