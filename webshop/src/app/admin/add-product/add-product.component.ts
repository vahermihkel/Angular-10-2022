import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  message = "Lisa uus toode!";
  private dbProducts: any[] = [];
  private productsDbUrl = "https://angular-10-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>(this.productsDbUrl).subscribe(response => {
      this.dbProducts = response.slice(); // programm ei näeks neid identsena (tulevad samast kohast)
    });
  }

  addProduct(form: NgForm) {
    this.message = "Uus toode lisatud!";
    // const products = JSON.parse(localStorage.getItem("products") || "[]");
    // products.push(vorm.value);
    // productsFromFile.push(vorm.value);
    // localStorage.setItem("products", JSON.stringify(products));
    this.dbProducts.push(form.value);
    this.http.put(this.productsDbUrl, this.dbProducts).subscribe();
  }

}
