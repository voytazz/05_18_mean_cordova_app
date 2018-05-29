import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpModule } from '@angular/http'
import { HomeComponent } from './components/pages/home/home.component'
import { NavComponent } from './components/nav/nav.component'
import { LoginComponent } from './components/pages/login/login.component'
import { RegisterComponent } from './components/pages/register/register.component'
import { ProfileComponent } from './components/pages/profile/profile.component'
import { FooterComponent } from './components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
