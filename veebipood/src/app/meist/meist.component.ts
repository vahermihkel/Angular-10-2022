import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meist',
  templateUrl: './meist.component.html',
  styleUrls: ['./meist.component.css']
})
export class MeistComponent implements OnInit {
  telefon = localStorage.getItem("telefon") || "Telefoni pole veel sisestatud";
  email = localStorage.getItem("email") || "Emaili pole veel sisestatud";
  n2itaEmaili = false;

  constructor() { }

  ngOnInit(): void {
  }

  kuvaEmaili() {
    this.n2itaEmaili = true;
  }

  lisaSuunakood() {
    this.telefon = "+372" + this.telefon;
  }

}
