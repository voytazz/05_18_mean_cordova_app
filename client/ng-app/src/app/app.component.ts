import { Component, OnInit } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: Http) {}

  innerHtml(item) {
    const div = document.getElementById('div')
    div.innerHTML += `<p>${item}</p>`
  }

  onClickButton() {
    this.httpGet().subscribe(res => {
      const testJson = res.json()
      console.log(testJson)
      this.innerHtml(testJson.data)
    })

    this.httpPost().subscribe(res => {
      const testJson = res.json()
      console.log(testJson)
      this.innerHtml(testJson.data)
    })
  }

  httpGet() {
    //-------------------------------------------
    // Mobile
    //-----------
    //
    //return this.http.get('https://meanwsbapp.herokuapp.com/home')
    //
    //===========================================
    //-------------------------------------------
    //Server
    //------------
    //
    //return this.http.get('/home')
    //
    //===========================================
    //-------------------------------------------
    //Production
    //
    return this.http.get('http://localhost:8080/home')
    //
    //===========================================
  }

  httpPost() {
    const header = new Headers()
    header.append('Content-Type', 'application/json')
    return this.http.post(
      //-------------------------------------------
      // Mobile
      //-----------
      //
      //'https://meanwsbapp.herokuapp.com/home',
      //
      //===========================================
      //-------------------------------------------
      //Server
      //------------
      //
      //'/home',
      //
      //===========================================
      //-------------------------------------------
      //Production
      //
      'http://localhost:8080/home',
      //
      //===========================================
      { data: 'hello from angular home' },
      { headers: header }
    )
  }

  ngOnInit() {}
}
