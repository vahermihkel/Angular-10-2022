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
  tootajad = [
    {nimi: "Johnny", amet: "CFO"}, 
    {nimi: "George", amet: "CEO"}, 
    {nimi: "Michael", amet: "CTO"}, 
    {nimi: "James", amet: "Marketing"}
  ];

// list, array, massiiv

  constructor() { }

  ngOnInit(): void {
  }

  sorteeriAZ() {
    // this.poed.sort();
    this.poed.sort((a,b) => a.nimi.localeCompare(b.nimi));
    // this.poed = this.poed.slice().sort();
  }

  sorteeriZA() {
    // this.poed.sort().reverse();
    // this.poed.sort((a,b) => a.nimi.localeCompare(b.nimi)).reverse();
    // this.poed.sort((a,b) => -1 * a.nimi.localeCompare(b.nimi));
    this.poed.sort((a,b) => b.nimi.localeCompare(a.nimi));
    // this.poed = this.poed.slice().sort().reverse();
  }

  filtreeri() {
    this.poed = this.poed.filter(pood => pood.nimi.endsWith("mäe"));
  }

  muudaK6iki() {
    this.poed = this.poed.map(pood => {return{nimi:"--" + pood.nimi, aeg: pood.aeg}});
  }

  originaali() {
    this.poed = poedFailist;
  }

  kustuta(kustutatavPood: any) {
    //   1               = ["Mustamäe", "Kristiine"].indexOf("Kristiine");
    const j2rjekorraNumber = this.poed.indexOf(kustutatavPood);
    // ["Mustamäe", "Kristiine"].splice(1,1);
    this.poed.splice(j2rjekorraNumber,1);
  }

  lisa(vorm: NgForm) {
    // {nimi: vorm.value.nimi, aeg: vorm.value.aeg}
    this.poed.push(vorm.value);
  }

  tyhjenda() {
    this.poed = [];
  }

  sorteeriKasvavalt() {
    this.poed.sort((a,b) => a.nimi.length - b.nimi.length);
  }

}
