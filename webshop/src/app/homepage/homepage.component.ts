import { Options } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from 'angular-toastify';
import { CartProduct } from '../models/cart-product.model';
// import productsFromFile from "../../assets/products.json";
import { Product } from '../models/product.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  // products = productsFromFile;
  products: Product[] = [];
  private dbProducts: Product[] = [];
  // categories = new Set(["football", "football", "football", "basketball", "basketball"]);
  categories: string[] = [];
  currentDate = new Date();
  percentFromDb = 0.5;

  minValue: number = 0;
  maxValue: number = 799;
  options: Options = {
    floor: 0,
    ceil: 999
  };

  constructor(private http: HttpClient, 
    private databaseService: DatabaseService,
    private _toastService: ToastService,
    private translateService: TranslateService) { }

  ngOnInit(): void {
    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      // console.log("VÕTAN ANDMEBAASIST ASJU");
      this.products = response.slice(); // .slice() -> mälukoha kaotamine
      this.dbProducts = response.slice(); // programm ei näeks neid identsena (tulevad samast kohast)
      // console.log(response);
      response.sort((a,b) => a.price - b.price);
      // console.log(response[0].price);
      // console.log(response[response.length-1].price);
      this.categories = [...new Set(this.products.map(element => element.category))];
      this.options = {
        floor: 0,
        ceil: 999
      }
    });
    setInterval(() => {
      this.currentDate = new Date();
    }, 1000)
  }

  filterProductsByPrice() {
    // console.log(this.dbProducts);
    // console.log(this.minValue);
    this.products = this.dbProducts.filter(element => 
      element.price >= this.minValue && element.price <= this.maxValue );
  }

  backToDbProducts() {
    this.products = this.dbProducts.slice(); // .slice() -> mälukoha kaotamine
  }

  filterByCategory(categoryClicked: string) {
    this.products = this.dbProducts.filter(element => element.category === categoryClicked);
  }

  sortAZ() {
    this.products.sort((a,b) => a.name.localeCompare(b.name));
  }

  sortZA() {
    // this.products.sort((a,b) => -1 * a.name.localeCompare(b.name));

    // this.products.sort((a,b) => a.name.localeCompare(b.name));
    // this.products.reverse();

    this.products.sort((a,b) => b.name.localeCompare(a.name));
  }

  sortPriceAsc() {
    this.products.sort((a,b) => a.price - b.price);
  }

  sortPriceDesc() {
    this.products.sort((a,b) => b.price - a.price);
  }
        // {id: 1, name: "s", price: 21}
  addToCart(clickedItem: Product) {
    const cartLS = localStorage.getItem("cart") || "[]";
    const cart: CartProduct[] = JSON.parse(cartLS);
    // {product: clickedItem, quantity: 1}
    const index = cart.findIndex(element => element.product.id === clickedItem.id);
    if (index >= 0) {
      // tooted[j2rjekorraNumber]   (üksik-toode failis)
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      cart.push({"product": clickedItem, "quantity": 1});
      //      {product: {id: 1, name: "s", price: 21}, quantity: 1}
    }
    const newCart = JSON.stringify(cart);
    localStorage.setItem("cart", newCart);
    this._toastService.success(this.translateService.instant('toast.added-to-cart'));
  }

}


// Leaflet - kaardirakendus (paneme kõik poed)
// emailjs.com