import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-yksik-toode',
  templateUrl: './yksik-toode.component.html',
  styleUrls: ['./yksik-toode.component.css']
})
export class YksikToodeComponent implements OnInit {
  leitudToode = "";    // läheb HTMLi

  // 1. mul on vaja leida KÕIK tooted
  // 2. mul on vaja midagi unikaalset tema kohta,
  //    mille abil teda leida (URL-s)
  // 3. selle unikaalse tunnuse abil leian
  //    ta üles enda toodete hulgast

  // ["Coca-cola", "Fanta", "Sprite"]

  // konstruktor on node_module-st failide ühendamiseks
  constructor(private route: ActivatedRoute) { }

  // käimamineku funktsioon
  ngOnInit(): void {
    const tooted = JSON.parse(localStorage.getItem("tooted") || "[]");
    const index = Number(this.route.snapshot.paramMap.get("j2rjekorraNumber"));
    this.leitudToode = tooted[index];
    //      "dogs"     =     ["cats", "dogs", "cows"][1]
  }

}



// ternary operator  
  //kas on tõene  ?  kui on tõene  : kui on väär
