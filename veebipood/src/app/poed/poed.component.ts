import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import poedFailist from "./poed.json";

@Component({
  selector: 'app-poed',
  templateUrl: './poed.component.html',
  styleUrls: ['./poed.component.css']
})
export class PoedComponent implements OnInit {
  // saan muuta järjekorda, arvu
  // kui neid on meeletu hulk
  poed = poedFailist;

// list, array, massiiv

  constructor() { }

  ngOnInit(): void {
  }

  sorteeriAZ() {
    this.poed.sort();
    // this.poed = this.poed.slice().sort();
  }

  sorteeriZA() {
    this.poed.sort().reverse();
    // this.poed = this.poed.slice().sort().reverse();
  }

  filtreeri() {
    this.poed = this.poed.filter(pood => pood.endsWith("mäe"));
  }

  muudaK6iki() {
    this.poed = this.poed.map(pood => "--" + pood);
  }

  originaali() {
    this.poed = poedFailist;
  }

  kustuta(kustutatavPood: string) {
    //   1               = ["Mustamäe", "Kristiine"].indexOf("Kristiine");
    const j2rjekorraNumber = this.poed.indexOf(kustutatavPood);
    // ["Mustamäe", "Kristiine"].splice(1,1);
    this.poed.splice(j2rjekorraNumber,1);
  }

  lisa(vorm: NgForm) {
    this.poed.push(vorm.value.pood);
  }

  tyhjenda() {
    this.poed = [];
  }

  sorteeriKasvavalt() {
    this.poed.sort((a,b) => a.length - b.length);
  }

}
