import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvalehtComponent } from './avaleht/avaleht.component';
import { LisaToodeComponent } from './lisa-toode/lisa-toode.component';
import { OstukorvComponent } from './ostukorv/ostukorv.component';

// localhost:4200/  ---> avaleht.component.html + .css kujunduse jaoks + .ts dünaamika jaoks
// localhost:4200/lisa-toode -> lisa-toode.component.html + css + .ts
// localhost:4200/ostukorv -> ostukorv.component.html + css + .ts
const routes: Routes = [
  { path: "", component: AvalehtComponent },
  { path: "lisa-toode", component: LisaToodeComponent },
  { path: "ostukorv", component: OstukorvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
