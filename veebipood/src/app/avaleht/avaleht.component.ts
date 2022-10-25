import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kogus = 5;
  liked = false;
  sonum = "";

  constructor() { }

  ngOnInit(): void {
  }

  nulli() {
    this.kogus = 0;
    this.sonum = "Kogus nullitud";
  }

  vahenda() {
    //   4     =     5      -  1
    this.kogus = this.kogus - 1;
    this.sonum = "Kogus vähendatud"
  }

  suurenda() {
    if (this.kogus === 10) { // sulgude sees on avaldis, mis küsib kas on tõene
      this.sonum = "Ei saa suurendada, maksimum kogus on 10"; // tõene blokk
    } else {
      this.kogus = this.kogus + 1; // väär blokk
      this.sonum = "Kogus suurendatud";
    }
  }

  muudaLike(uusVaartus: boolean) {
    this.liked = uusVaartus;
  }

}
