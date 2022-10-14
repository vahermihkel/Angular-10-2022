import { Component, OnInit } from '@angular/core';

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

  lisaToode() {
    this.sonum = "Uus toode lisatud!"
  }

}
