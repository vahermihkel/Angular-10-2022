import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaleht',
  templateUrl: './avaleht.component.html',
  styleUrls: ['./avaleht.component.css']
})
export class AvalehtComponent implements OnInit {
  kogus = 5;
  liked = false;

  constructor() { }

  ngOnInit(): void {
  }

  nulli() {
    this.kogus = 0;
  }

  vahenda() {
    //   4     =     5      -  1
    this.kogus = this.kogus - 1;
  }

  suurenda() {
    this.kogus = this.kogus + 1;
  }

  muudaLike(uusVaartus: boolean) {
    this.liked = uusVaartus;
  }

}
