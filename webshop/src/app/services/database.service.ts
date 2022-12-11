import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  productsDbUrl = "https://angular-10-22-default-rtdb.europe-west1.firebasedatabase.app/products.json";
  categoriesDbUrl = "https://angular-10-22-default-rtdb.europe-west1.firebasedatabase.app/categories.json";


  constructor() { }
}
