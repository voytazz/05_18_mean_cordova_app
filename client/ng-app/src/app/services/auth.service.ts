import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any
  user: any
  url = location.pathname.replace('/', '')
  logged: boolean
  //  prod
  //prodUrl = 'http://localhost:8080/'
  //----------------------------------
  //  heroku
  //prodUrl = ''
  //----------------------------------
  //  cordova
  prodUrl = 'https://notemy-app.herokuapp.com/'
  //----------------------------------

  constructor(private http: Http) {}

  postHttp(user, url) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    return this.http
      .post(`${this.prodUrl}${url}`, user, {
        headers: header
      })
      .map(res => res.json())
  }

  getHttp(url) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    return this.http
      .get(`${this.prodUrl}${url}`, {
        headers: header
      })
      .map(res => res.json())
  }

  getProfile() {
    const header = new Headers()
    this.loadToken()
    console.log(this.authToken)
    header.append('Authorization', this.authToken)
    header.append('Content-Type', 'application/json')
    return this.http
      .get(`${this.prodUrl}server/profile`, { headers: header })
      .map(res => res.json())
  }

  loggedIn() {
    return localStorage.getItem('id_token')
  }

  loadToken() {
    const token = localStorage.getItem('id_token')
    this.authToken = token
  }

  storeUserData(token, user) {
    localStorage.setItem('id_token', token)
    localStorage.setItem('user', JSON.stringify(user))
    this.authToken = token
    this.user = user
  }

  loguot() {
    if (this.logged) {
      this.logged = false
      this.authToken = null
      this.user = null
      localStorage.clear()
    }
  }

  sendNote(note) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    return this.http
      .post(`${this.prodUrl}server/addnote`, note, { headers: header })
      .map(res => res.json())
  }

  getAllNotes() {
    return this.http.get(`${this.prodUrl}server/home`).map(res => res.json())
  }
}
