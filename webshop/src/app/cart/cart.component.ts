import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  pay() {
    // salvestan tellimuse -> andmebaas annab mulle tellimuse ID
    //                          salvestan tellimuse maksmata kujul

    const paymentUrl = "https://igw-demo.every-pay.com/api/v4/payments/oneoff";

    const paymentData = {
      "api_username": "92ddcfab96e34a5f",
      "account_name": "EUR3D1",
      "amount": this.cartSum,
      "order_reference": Math.random() * 999999,
      "nonce": "a9b7f7e79" + new Date() + Math.random() * 999999,
      "timestamp": new Date(),
      "customer_url": "https://angular1022.web.app"
      }

    const headers = {
      headers: new HttpHeaders({"Authorization":"Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="})
    }
    
    this.http.post<any>(paymentUrl, paymentData, headers).subscribe(response => {
      window.location.href = response.payment_link;
      // this.router.navigateByUrl("/admin/halda") <--- TS-s
      // <div routerLink="/admin/halda">Mine halda</div> <--- HTML-s
      // window.location.href = <-- väline link
    });

    // muudan andmebaasis tellimuse staatuse makstuks
  }

}
