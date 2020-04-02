import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';



@NgModule({
  declarations: [RegisterComponent, UserprofileComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class AppheadModule { }
