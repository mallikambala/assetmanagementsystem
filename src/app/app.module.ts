import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheadComponent } from './apphead/apphead.component';
import { RouterModule } from '@angular/router';
import { AppheadModule } from './apphead/apphead.module';

@NgModule({
  declarations: [
    AppComponent,
    AppheadComponent
  ],
  imports: [
    BrowserModule,
    AppheadModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
