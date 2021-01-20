import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent,},
  {path:'About',component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Login',component:LoginComponent},
  {path:'View/:un',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
