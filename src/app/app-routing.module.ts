import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppheadComponent } from './apphead/apphead.component';
import { RegisterComponent } from './apphead/register/register.component';


const routes: Routes = [
  {path:'apphead',component:AppheadComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
