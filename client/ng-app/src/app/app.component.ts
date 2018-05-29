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
  constructor(private http: Http) {}

  // innerHtml(item) {
  //   const div = document.getElementById('div')
  //   div.innerHTML += `<p>${item}</p>`
  // }

  // // onClickButton() {
  // //   return this.http
  // //     .get('http://localhost:8080/home')
  // //     .map(res => res.json())
  // //     .subscribe(res => console.log(res))
  // // }
  // onClickButton() {
  //   this.httpGet().subscribe(res => {
  //     //const testJson = res.json()
  //     //console.log(testJson)
  //     console.log(res)
  //     //this.innerHtml(testJson.data)
  //     this.innerHtml(res.data)
  //   })

  //   this.httpPost().subscribe(res => {
  //     //const testJson = res.json()
  //     //console.log(testJson)
  //     console.log(res)
  //     //this.innerHtml(testJson.data)
  //     this.innerHtml(res.data)
  //   })

  //   this.android().subscribe(res => {
  //     //const testJson = res.json()
  //     //console.log(testJson)
  //     console.log(res)
  //     //this.innerHtml(testJson.data)
  //     //this.innerHtml(res)
  //   })
  //   fetch('http://localhost:8080/server/home')
  //     .then(data => data.json())
  //     .then(data => console.log(data))
  // }

  // httpGet() {
  //   const header = new Headers()
  //   //header.append('Content-Type', 'application/json')
  //   //-------------------------------------------
  //   // Mobile
  //   //-----------
  //   //
  //   //return this.http.get('https://meanwsbapp.herokuapp.com/home')
  //   //
  //   //===========================================
  //   //-------------------------------------------
  //   //Server
  //   //------------
  //   //
  //   //return this.http.get('/home')
  //   //
  //   //===========================================
  //   //-------------------------------------------
  //   //Production
  //   //
  //   return this.http
  //     .get('http://localhost:8080/server/home')
  //     .map(res => res.json())
  // }

  // httpPost() {
  //   const header = new Headers()
  //   header.append('Content-Type', 'application/json')
  //   return this.http
  //     .post(
  //       //-------------------------------------------
  //       // Mobile
  //       //-----------
  //       //
  //       //'https://meanwsbapp.herokuapp.com/home',
  //       //
  //       //===========================================
  //       //-------------------------------------------
  //       //Server
  //       //------------
  //       //
  //       //'/home',
  //       //
  //       //===========================================
  //       //-------------------------------------------
  //       //Production
  //       //
  //       'http://localhost:8080/server/home',
  //       //
  //       //===========================================
  //       { data: 'hello from angular home' },
  //       { headers: header }
  //     )
  //     .map(res => res.json())
  // }

  // android() {
  //   const header = new Headers()
  //   //header.append('Content-Type', 'application/json')
  //   return this.http.get(
  //     'http://localhost:8080/server/android'
  //     //'/android' //,
  //     //{ data: 'hello from angular home' },
  //     //{ headers: header }
  //   )
  // }

  ngOnInit() {}
}
