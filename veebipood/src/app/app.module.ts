import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    LisaToodeComponent
  ],
  imports: [  // IMPORDIN HTMLi MIDA EI EKSISTEERI TAVA HTML-s
    BrowserModule, // <--- *ngIf
    AppRoutingModule, // <--- routerLink=""    <router-outlet><router-outlet/>
    FormsModule //    ngForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
