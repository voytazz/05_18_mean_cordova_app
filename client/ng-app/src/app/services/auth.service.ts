import { Http, Headers } from '@angular/http'
import { Injectable } from '@angular/core'
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any
  user: any

  constructor(private http: Http) {}

  postHttp(user, url) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    return this.http
      .post(`http://localhost:8080/${url}`, user, {
        headers: header
      })
      .map(res => res.json())
  }

  getHttp(url) {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    return this.http
      .get(`http://localhost:8080/${url}`, {
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
      .get(`http://localhost:8080/server/profile`, { headers: header })
      .map(res => res.json())
  }

  loggedIn() {
    console.log(localStorage.getItem('id_token'))
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
    this.authToken = null
    this.user = null
    localStorage.clear()
  }
}
