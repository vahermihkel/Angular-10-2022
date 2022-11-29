import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartProduct } from '../models/cart-product.model';
import { ParcelMachine } from '../models/parcel-machine.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  // {product: Product, quantity: number}
  cart: CartProduct[] = JSON.parse(localStorage.getItem("cart") || "[]");
  cartSum = 0;
  cartTotalItems = 0;
  parcelMachines: ParcelMachine[] = [];

  constructor(private http: HttpClient) { }

   
  // {product: clickedItem, quantity: 1}
  // {product: {id: 1, name: "s", price: 21}, quantity: 1}

  ngOnInit(): void {
    this.cart.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
    this.cart.forEach(element => this.cartTotalItems = this.cartTotalItems + element.quantity);
    this.http.get<ParcelMachine[]>("https://www.omniva.ee/locations.json").subscribe(response => 
      this.parcelMachines = response.filter(element => element.A0_NAME === "EE")
      );
  }

  remove(i: number) {
    this.cart.splice(i,1);
    this.updateCart();
  }

  decreaseQuantity(i: number) {
    // this.kogus = this.kogus - 1;
    this.cart[i].quantity = this.cart[i].quantity - 1;
    if (this.cart[i].quantity === 0) {
      this.remove(i);
    }
    this.updateCart();
  }

  increaseQuantity(i: number) {
    this.cart[i].quantity = this.cart[i].quantity + 1;
    this.updateCart();
  }

  updateCart() {
    localStorage.setItem("cart", JSON.stringify(this.cart));
    this.cartSum = 0;
    this.cart.forEach(element => this.cartSum = this.cartSum + element.product.price * element.quantity);
    this.cartTotalItems = 0;
    this.cart.forEach(element => this.cartTotalItems = this.cartTotalItems + element.quantity);
  }

  // this.cartSum <- ei arvutata, sest seda peab alati manuaalselt lisama
  // ei salvestata

  // maksma() {
  //   // saada maksesse: cartSum.toFixed(2)
  // }

  // linkedIn
  // meetfrank

}
