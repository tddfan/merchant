import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xpress-pay',
  templateUrl: './xpress-pay.component.html',
  styleUrls: ['./xpress-pay.component.scss']
})
export class XpressPayComponent implements OnInit {

  public bank;

  constructor() { }

  ngOnInit() {
  }

  chooseBank(val) {
    this.bank = val;
  }

}
