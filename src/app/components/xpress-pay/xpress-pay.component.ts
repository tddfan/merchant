import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from "app/models/shopping-cart.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-xpress-pay',
  templateUrl: './xpress-pay.component.html',
  styleUrls: ['./xpress-pay.component.scss']
})
export class XpressPayComponent {

  private cart: Observable<ShoppingCart>;
  private cartSubscription: Subscription;


  constructor(@Inject(DOCUMENT) private document: any,
    private shoppingCartService: ShoppingCartService) {
    this.cart = this.shoppingCartService.get();

  }

   goToUrl(): void {
    this.cart.subscribe(item=> {
      console.log(item);

      let request = btoa(' amount=' + item.grossTotal + '&merchantId=amazon' + '&merchantCustomerId=customer1@rbs.com' + '&endToEndIdentifier=' + (Math.floor(Math.random() * 1000) + 1));
      console.log(request);
      this.document.location.href = 'https://nwbfastpay.herokuapp.com?transactionstate=' + request;
    })
  }

}
