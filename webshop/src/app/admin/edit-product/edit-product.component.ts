import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import productsFromFile from "../../../assets/products.json";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  editProductForm!: FormGroup;
  private index!: number;
  idUnique = true;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const productId = Number(this.route.snapshot.paramMap.get("id"));
    console.log(productId)
    const productFound: any = productsFromFile.find(element => element.id === productId);
    console.log(productFound);
    this.index = productsFromFile.indexOf(productFound);

    this.editProductForm = new FormGroup({
      "id": new FormControl(productFound.id),
      "name": new FormControl(productFound.name),
      "price": new FormControl(productFound.price),
      "image": new FormControl(productFound.image),
      "category": new FormControl(productFound.category),
      "description": new FormControl(productFound.description),
      "active": new FormControl(productFound.active)
    })
  }

  updateProduct() {
    productsFromFile[this.index] = this.editProductForm.value;
  }

  checkIdUniqueness() {
    // .find --> leiab toote ja kui ei leia, siis on undefined
    // .findIndex --> leiab järjekorranumbri 0-...., kui ei leia, siis on -1
    

    const found = productsFromFile.find(element => element.id === this.editProductForm.value.id);
    if (found === undefined) {
      this.idUnique = true;
    } else {
      this.idUnique = false;
    }
  }

}
