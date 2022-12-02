import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { DatabaseService } from 'src/app/services/database.service';
// import productsFromFile from "../../../assets/products.json";

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products: Product[] = [];
  searchedProduct = "";
  private dbProducts: Product[] = [];
  descriptionLetters = 5;

  constructor(private http: HttpClient,
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.products = response.slice(); // .slice() -> mälukoha kaotamine
      this.dbProducts = response.slice(); // programm ei näeks neid identsena (tulevad samast kohast)
      console.log(this.dbProducts);
    });
  }

  deleteProduct(productClicked: Product) {
    const i = this.dbProducts.findIndex(element => element.id === productClicked.id);
    this.dbProducts.splice(i,1);
    this.products = this.dbProducts;
    this.searchProducts();
    this.http.put(this.databaseService.productsDbUrl, this.dbProducts).subscribe();
  }

  searchProducts() {
    // console.log(this.searchedProduct);
    this.products = this.dbProducts.filter(element => 
      element.name.toLowerCase().includes(this.searchedProduct.toLowerCase()));
  }

  changeProductActive(productClicked: Product) {
    const i = this.dbProducts.findIndex(element => element.id === productClicked.id);
    this.dbProducts[i].active = !productClicked.active;
    this.http.put(this.databaseService.productsDbUrl, this.dbProducts).subscribe();
  }

}
