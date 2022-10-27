import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  tooted = JSON.parse(localStorage.getItem("tooted") || "[]");

  kogus = 5;
  liked = false;
  sonum = "";

  constructor() { }

  ngOnInit(): void {
  }

  lisaOstukorvi(klikitudToode: string) {
    const ostukorvLS = localStorage.getItem("ostukorv") || "[]";
    const ostukorv = JSON.parse(ostukorvLS);
    ostukorv.push(klikitudToode);
    const uuenenudOstukorv = JSON.stringify(ostukorv);
    localStorage.setItem("ostukorv", uuenenudOstukorv);


    // const ostukorv2 = JSON.parse(localStorage.getItem("ostukorv") || "[]");
    // ostukorv2.push(klikitudToode);
    // localStorage.setItem("ostukorv", JSON.stringify(ostukorv2));
  }

  // 1. võta localStoragest ( localStorage.getItem() )
  // 2. jutumärgid maha     (  JSON.parse() )
  // 3. lisa üks juurde     (   .push() )
  // 4. jutumärgid peale    (  JSON.stringify()  )
  // 5. localStorage-sse tagasi    (  localStorage.setItem()  )

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
