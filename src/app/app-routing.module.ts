import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutpageComponent } from './components/aboutpage/aboutpage.component';
import { ContactpageComponent } from './components/contactpage/contactpage.component';
import { ShoplistpageComponent } from './components/shoplistpage/shoplistpage.component';
import { ShopdetailspageComponent } from './components/shopdetailspage/shopdetailspage.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"Homepage",
    pathMatch:"full"
  },
  {    path:"Homepage",
    component:HomepageComponent
  },
  {    path:"AboutUs",
    component:AboutpageComponent
  },
  {    path:"ContactUs",
    component:ContactpageComponent
  },
  {    path:"ShopLists",
    component:ShoplistpageComponent
  },
  {    path:"ShopDetails",
    component:ShopdetailspageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
