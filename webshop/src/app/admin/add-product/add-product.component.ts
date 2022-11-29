import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from 'angular-toastify';
import { Product } from 'src/app/models/product.model';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  private dbProducts: Product[] = [];
  idUnique = true;

  constructor(private http: HttpClient,
    private databaseService: DatabaseService,
    private _toastService: ToastService) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.dbProducts = response.slice(); // programm ei näeks neid identsena (tulevad samast kohast)
    });
  }

  addProduct(form: NgForm) {
    // const products = JSON.parse(localStorage.getItem("products") || "[]");
    // products.push(vorm.value);
    // productsFromFile.push(vorm.value);
    // localStorage.setItem("products", JSON.stringify(products));
    this.dbProducts.push(form.value);
    this.http.put(this.databaseService.productsDbUrl, this.dbProducts).subscribe(() => {
      form.reset();
      this._toastService.success('Edukalt uus toode lisatud');
      // info - sinine
      // success - roheline
      // error - punane
      // warn - kollane
    });
  }

  checkIdUniqueness(form: NgForm) {
    const found = this.dbProducts.find(element => element.id === form.value.id);
    if (found === undefined) {
      this.idUnique = true;
    } else {
      this.idUnique = false;
    }
  }

}
