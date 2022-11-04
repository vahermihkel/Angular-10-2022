import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { HaldaTooteidComponent } from './halda-tooteid/halda-tooteid.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { MeistComponent } from './meist/meist.component';
import { MuudaToodeComponent } from './muuda-toode/muuda-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';
import { PoedComponent } from './poed/poed.component';
import { SeadedComponent } from './seaded/seaded.component';
import { YksikToodeComponent } from './yksik-toode/yksik-toode.component';

// localhost:4200/  ---> avaleht.component.html + .css kujunduse jaoks + .ts dünaamika jaoks
// localhost:4200/lisa -> lisa-toode.component.html + css + .ts
// localhost:4200/ostukorv -> ostukorv.component.html + css + .ts
const routes: Routes = [
  { path: "", component: AvalehtComponent },
  { path: "lisa", component: LisaToodeComponent },
  { path: "ostukorv", component: OstukorvComponent },
  { path: "meist", component: MeistComponent },
  { path: "seaded", component: SeadedComponent },
  { path: "poed", component: PoedComponent },
  { path: "toode/:j2rjekorraNumber", component: YksikToodeComponent },
  { path: "halda", component: HaldaTooteidComponent },
  { path: "muuda/:j2rjekorraNumber", component: MuudaToodeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
