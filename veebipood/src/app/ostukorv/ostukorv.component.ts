import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ostukorv',
  templateUrl: './ostukorv.component.html',
  styleUrls: ['./ostukorv.component.css']
})
export class OstukorvComponent implements OnInit {
  ostukorv: any[] = JSON.parse(localStorage.getItem("ostukorv") || "[]");
  kogusumma = 0;

  constructor() { }

  ngOnInit(): void {         
    this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
  }

        // "Fanta"
  kustuta(klikitudEse: string) {
    const j2rjekorraNumber = this.ostukorv.indexOf(klikitudEse);
    this.ostukorv.splice(j2rjekorraNumber,1);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
    this.kogusumma = 0;
    this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
  }

  tyhjenda() {
    // this.ostukorv.splice(0);
    this.ostukorv = [];
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
    this.kogusumma = 0;
    // this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
  }

  //   
  lisa(klikitudEse: string) {
    this.ostukorv.push(klikitudEse);
    localStorage.setItem("ostukorv", JSON.stringify(this.ostukorv));
    this.kogusumma = 0;
    this.ostukorv.forEach(ese => this.kogusumma = this.kogusumma + ese.hind);
  }

}

// = uus väärtus
// === kontrollin kas vasak pool ja parem pool võrduvad
// : tüübi andmiseks
// millist liiki väärtus muutuja sisse läheb
