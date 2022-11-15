import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './admin/add-product/add-product.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { EditProductComponent } from './admin/edit-product/edit-product.component';
import { MaintainProductsComponent } from './admin/maintain-products/maintain-products.component';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SingleProductComponent } from './single-product/single-product.component';

const routes: Routes = [
  { path: "", component: HomepageComponent },
  { path: "ostukorv", component: CartComponent },
  { path: "toode", component: SingleProductComponent },
  { path: "admin", component: AdminhomeComponent },
  { path: "admin/lisa-toode", component: AddProductComponent },
  { path: "admin/muuda-toode/:id", component: EditProductComponent },
  { path: "admin/halda-tooteid", component: MaintainProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }