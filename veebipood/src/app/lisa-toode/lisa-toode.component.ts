import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lisa-toode',
  templateUrl: './lisa-toode.component.html',
  styleUrls: ['./lisa-toode.component.css']
})
export class LisaToodeComponent implements OnInit {
  sonum = "Lisa uus toode!";

  constructor() { }

  ngOnInit(): void {
  }

  lisaToode(vorm: NgForm) {
    this.sonum = "Uus toode lisatud!";
                    // "["Coca-cola", "Fanta", "Sprite"]"   ||    "[]"
    // const tootedLS = localStorage.getItem("tooted") || "[]";
    //                 // ["Coca-cola", "Fanta", "Sprite"]    ||   []
    // const tooted = JSON.parse(tootedLS);
    //                 // ["Coca-cola", "Fanta", "Sprite", "Vichy"]  ||   ["Vichy"]
    // tooted.push(vorm.value.nimi);
    //                 // "["Coca-cola", "Fanta", "Sprite", "Vichy"]"  ||   "["Vichy"]"
    // const uuedTooted = JSON.stringify(tooted);
    //                 //   "tooted"   |   "["Coca-cola", "Fanta", "Sprite", "Vichy"]" 
    //                 //   "tooted"   |   "["Vichy"]"
    // localStorage.setItem("tooted", uuedTooted);


    const tooted = JSON.parse(localStorage.getItem("tooted") || "[]");
    //   "Coca-cola"   või     "Nobe"
    // tooted.push(vorm.value.nimi);
    // {nimi: "Coca-cola", hind: "5"}
    tooted.push(vorm.value);
    localStorage.setItem("tooted", JSON.stringify(tooted));
  }

    // 1. võtan localStorage-st
    // 2. võtan jutumärgid maha
    // 3. pushin ühe juurde
    // 4. panen jutumärgid tagasi
    // 5. panen localStorage-sse tagasi

}
