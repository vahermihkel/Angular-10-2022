import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-muuda-toode',
  templateUrl: './muuda-toode.component.html',
  styleUrls: ['./muuda-toode.component.css']
})
export class MuudaToodeComponent implements OnInit {
  // 1. Tehakse valmis leitudToode muutuja, millele väärtust ei anta
  // ehk tal ei ole võrdusmärki taga (ta on tühjus), ta ootab enda sisse
  // objekti, kuna tal on tüübiks any (kooloni abil annan tüübi)
  leitudToode: any;
  // 2. private - tähistame, et seda muutujat ei kasutata HTML-s
  // SEST kõik muud muutujad järelikult on kasutusel HTML-s
  // private eesliidesega on kasutusel kahes või enamast funktsioonis
  // 4. route kaudu võtame snapshoti ja selle küljest paramMap ja selle küljest get
  // (see on Angulari poolt paika pandud), get sulgude sisse pean kirjutama muutuja
  // mis on app-routing.module.ts sees URL-s kooloni taga
  // kuna alati tulevad URL-i muutujad sõnalisel kujul, pean teisendama numbriks
  private index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
  // 5. võtame tooted localStorage seest võtme "tooted" abil ja kui seal on tühjus
  //   ehk seda võtit ei ole, siis võtame tühja array - []
  private tooted = JSON.parse(localStorage.getItem("tooted") || "[]"); 
  // 6. loon uue tühja muutuja tüübist FormGroup, mis ssaab väärtuse ngOnInit sees
  // kus talle antakse võrdusmärgiga lõpuks väärtus  
  muutmiseVorm!: FormGroup;

  // 3. Tekitatakse uus muutuja nimega route
  // saab väärtuse läbi node_modules kausta võttes enda sisse faili ActivatedRoute
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 7. annan leitudToode muutujale väärtuse (enne oli tühjus)
    this.leitudToode = this.tooted[this.index];
    //    "BMW"     =    ["BMW", "Nobe", "Tesla"][0]
    // 8. annan muutmiseVorm muutujale väärtuse (enne oli tühjus)
    // new FormGroup ehk tehakse uus vorm, millele antakse võti-väärtus paaridena
    // algväärtused mis pannakse vormi sisse
    this.muutmiseVorm = new FormGroup({
      "nimi": new FormControl(this.leitudToode.nimi),
      "hind": new FormControl(this.leitudToode.hind),
      "aktiivne": new FormControl(this.leitudToode.aktiivne),
      "pilt": new FormControl(this.leitudToode.pilt)
    });
  }

  muuda(vorm: FormGroup) {
    //["BMW", "Nobe", "Tesla"][1] = "Audi";
    //["BMW", "Audi", "Tesla"]
    this.tooted[this.index] = vorm.value;
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
