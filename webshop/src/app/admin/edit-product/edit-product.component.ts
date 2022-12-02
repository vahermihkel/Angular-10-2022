import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
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
  private products: Product[] = [];
  private productId = -1;

  constructor(private route: ActivatedRoute,
    private http: HttpClient,
    private databaseService: DatabaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get("id"));

    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      const productFound: Product | undefined = response.find(element => element.id === this.productId);
      if (productFound !== undefined) {
        this.index = response.indexOf(productFound);
        this.products = response;
    
        this.editProductForm = new FormGroup({
          "id": new FormControl(productFound.id, [Validators.required]),
          "name": new FormControl(productFound.name, [Validators.required]),
          "price": new FormControl(productFound.price, [Validators.required]),
          "image": new FormControl(productFound.image, [Validators.required, Validators.pattern(/^\S*$/)]),
          "category": new FormControl(productFound.category, [Validators.required, Validators.pattern(/^[a-zA-ZÜÕÖÄüõöä \-,]+$/)]),
          "description": new FormControl(productFound.description, [Validators.required]),
          "active": new FormControl(productFound.active)
        })
      }
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
    if (this.editProductForm.value.id === this.productId) {
      this.idUnique = true;
      return; // see return tähistab siin, et ära enam edasi sellest funktsioonis mine
              // variant nr 2 -> return asemele if alumise loogelise sulu lõpus else blokk
    }

    const found = this.products.find(element => element.id === this.editProductForm.value.id);
    if (found === undefined) {
      this.idUnique = true;
    } else {
      this.idUnique = false;
    }
  }

}
