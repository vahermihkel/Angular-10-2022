import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { SeadedComponent } from './seaded/seaded.component';
import { MeistComponent } from './meist/meist.component';
import { PoedComponent } from './poed/poed.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';

@NgModule({
  declarations: [
    AppComponent,
    AvalehtComponent,
    OstukorvComponent,
    LisaToodeComponent,
    SeadedComponent,
    MeistComponent,
    PoedComponent,
    YksikToodeComponent,
    HaldaTooteidComponent,
    MuudaToodeComponent,
  ],
  imports: [  // IMPORDIN HTMLi MIDA EI EKSISTEERI TAVA HTML-s
    BrowserModule, // <--- *ngIf
    AppRoutingModule, // <--- routerLink=""    <router-outlet><router-outlet/>
    FormsModule, //    ngForm
    ReactiveFormsModule // formGroup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
