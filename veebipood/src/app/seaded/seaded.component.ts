import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seaded',
  templateUrl: './seaded.component.html',
  styleUrls: ['./seaded.component.css']
})
export class SeadedComponent implements OnInit {
  veebileheKeel = localStorage.getItem("keel");

  constructor() { }

  ngOnInit(): void {
  }

  salvestaKeel(keeleVorm: NgForm) {
    this.veebileheKeel = keeleVorm.value.keel;
    localStorage.setItem("keel",keeleVorm.value.keel);
  }

  salvestaKontaktid(kontaktVorm: NgForm) {
    localStorage.setItem("telefon",kontaktVorm.value.telefon);
    localStorage.setItem("email",kontaktVorm.value.email);
  }

}

// Angularis
// 1. ise mõtlete projekti välja (endale portfoolio)
// 2. Youtube/Udemy'st 
// 3. Veebipoe edasiarendus
// 4. Ettevõtte proovitöö