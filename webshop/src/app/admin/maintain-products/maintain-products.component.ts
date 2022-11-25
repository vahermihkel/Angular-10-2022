import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
// import productsFromFile from "../../../assets/products.json";

@Component({
  selector: 'app-maintain-products',
  templateUrl: './maintain-products.component.html',
  styleUrls: ['./maintain-products.component.css']
})
export class MaintainProductsComponent implements OnInit {
  products: any[] = [];
  searchedProduct = "";
  private dbProducts: any[] = [];

  constructor(private http: HttpClient,
    private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.products = response.slice(); // .slice() -> mälukoha kaotamine
      this.dbProducts = response.slice(); // programm ei näeks neid identsena (tulevad samast kohast)
    });
  }

  deleteProduct(productClicked: any) {
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

}
