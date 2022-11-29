import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
  // products = productsFromFile;
  productFound!: Product | undefined;

  constructor(private http: HttpClient,
    private databaseService: DatabaseService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const urlId = Number(this.route.snapshot.paramMap.get("id"));
    this.http.get<Product[]>(this.databaseService.productsDbUrl).subscribe(response => {
      this.productFound = response.find(element => element.id === urlId);
    });
  }

}

// kui tahate endale veebilehte / teete väikekaupmehe raha eest veebileht
// kõige efektiivsem variant: Wordpress (kulu 2000 eurot), ajakulu kui ise teete 1-2 nädalat

// kui teete väiksemat custom-made arendust ise või sõbraga mõnele ettevõttele, kellel on raha rohkem:
// kulu 10 000-50 000 eurot -> node.js (javascript) / express.js backendiks ja angular front-endiks: 6 kuud

// 100 000+ eurot maksvad arendused (kõik riigi pootl tellitavad veebilehed):
// angular/react frontend ja Java backend : 2-3 aastased arendused
