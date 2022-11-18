import { Component, OnInit } from '@angular/core';
import productsFromFile from "../../assets/products.json";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  products = productsFromFile;
  // categories = new Set(["football", "football", "football", "basketball", "basketball"]);
  categories = new Set(productsFromFile.map(element => element.category));

  constructor() { }

  ngOnInit(): void {
  }

  filterByCategory(categoryClicked: string) {
    this.products = productsFromFile.filter(element => element.category === categoryClicked);
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
  addToCart(clickedItem: any) {
    const cartLS = localStorage.getItem("cart") || "[]";
    const cart: any[] = JSON.parse(cartLS);
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
  }

}
