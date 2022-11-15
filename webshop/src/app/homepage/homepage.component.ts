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

}
