import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorv = JSON.parse(localStorage.getItem("ostukorv") || "[]");

  constructor() { }

  ngOnInit(): void {
  }

        // "Fanta"
  kustuta(klikitudEse: string) {
    const j2rjekorraNumber = this.ostukorv.indexOf(klikitudEse);
    this.ostukorv.splice(j2rjekorraNumber,1);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
  }

  tyhjenda() {
    // this.ostukorv.splice(0);
    this.ostukorv = [];
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
  }

  //   
  lisa(klikitudEse: string) {
    this.ostukorv.push(klikitudEse);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
  }

}

// = uus väärtus
// === kontrollin kas vasak pool ja parem pool võrduvad
// : tüübi andmiseks
// millist liiki väärtus muutuja sisse läheb
