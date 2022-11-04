import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  leitudToode = "";
  private index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
  private tooted = JSON.parse(localStorage.getItem("tooted") || "[]"); 
  // Miks siin? Sest kasutan neid kahes või enamas funktsioonis
  muutmiseVorm!: FormGroup;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.leitudToode = this.tooted[this.index];
    //    "BMW"     =    ["BMW", "Nobe", "Tesla"][0]
    this.muutmiseVorm = new FormGroup({
      "nimi": new FormControl(this.leitudToode)
    });
  }

  muuda(vorm: FormGroup) {
    //["BMW", "Nobe", "Tesla"][1] = "Audi";
    //["BMW", "Audi", "Tesla"]
    this.tooted[this.index] = vorm.value.nimi;
    localStorage.setItem("tooted", JSON.stringify(this.tooted));
  }

}

// 1. Muutuja reale 9, mis hoiab enda sees toote nime, aga alguses on väärtus tühi
// 2. constructorisse teen võimekuse võtmaks URL parameetrit (import ka!)
// 3. ngOnInit sisse teen uue lokaalse muutuja (const), mis võtab enda sisse route kaudu URL parameetri
// 4. teen ta numbriks, kuna URL parameetrid tulevad kõik alati jutumärkidena
// 5. võtan kõik tooted localStorage-st
// 6. otsin õige toote kõikide toote muutujast üles
// 7. kuvan ta HTML-s 
