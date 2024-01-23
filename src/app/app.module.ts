import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ShopdetailspageComponent } from './components/shopdetailspage/shopdetailspage.component';
import { ShoplistpageComponent } from './components/shoplistpage/shoplistpage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutpageComponent,
    ShopdetailspageComponent,
    ShoplistpageComponent,
    ContactpageComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
