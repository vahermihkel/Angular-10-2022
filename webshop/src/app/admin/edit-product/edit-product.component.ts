import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
// import productsFromFile from "../../../assets/products.json";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductForm!: FormGroup;
  private index!: number;
  idUnique = true;
  private products: any[] = [];

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private router: Router) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get("id"));

    this.http.get<any[]>(this.databaseService.productsDbUrl).subscribe(response => {
      const productFound: any = response.find(element => element.id === productId);
      this.index = response.indexOf(productFound);
      this.products = response;
  
      this.editProductForm = new FormGroup({
        "id": new FormControl(productFound.id),
        "name": new FormControl(productFound.name),
        "price": new FormControl(productFound.price),
        "image": new FormControl(productFound.image),
        "category": new FormControl(productFound.category),
        "description": new FormControl(productFound.description),
        "active": new FormControl(productFound.active)
      })
    })
  }

  updateProduct() {
    this.products[this.index] = this.editProductForm.value;
    this.http.put(this.databaseService.productsDbUrl, this.products).subscribe(() => 
      this.router.navigateByUrl("/admin/halda-tooteid")
    );
  }

  checkIdUniqueness() {
    // .find --> leiab toote ja kui ei leia, siis on undefined
    // .findIndex --> leiab järjekorranumbri 0-...., kui ei leia, siis on -1
    

    const found = this.products.find(element => element.id === this.editProductForm.value.id);
    if (found === undefined) {
      this.idUnique = true;
    } else {
      this.idUnique = false;
    }
  }

}
