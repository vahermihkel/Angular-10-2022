import { Component, OnInit } from '@angular/core';
import productsFromFile from "../../../assets/products.json";

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products = productsFromFile;
  searchedProduct = "";

  constructor() { }

  ngOnInit(): void {
  }

  deleteProduct(productClicked: any) {
    const i = productsFromFile.findIndex(element => element.id === productClicked.id);
    productsFromFile.splice(i,1);
    this.products = productsFromFile;
    this.searchProducts();
  }

  searchProducts() {
    // console.log(this.searchedProduct);
    this.products = productsFromFile.filter(element => 
      element.name.toLowerCase().includes(this.searchedProduct.toLowerCase()));
  }

}
