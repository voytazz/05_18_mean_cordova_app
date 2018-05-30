import { AuthService } from './services/auth.service'
import { HttpClient } from '@angular/common/http'
import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private http: Http, private authService: AuthService) {}

  OnStartApplication() {
    if (this.authService.loggedIn()) {
      this.authService.logged = true
    } else {
      this.authService.logged = false
    }
  }

  ngOnInit() {
    this.OnStartApplication()
  }
}
