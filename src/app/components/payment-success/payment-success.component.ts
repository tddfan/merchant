import { Component, OnInit } from '@angular/core';
import {Router, RouterModule, ActivatedRoute, Params} from '@angular/router';
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { ShoppingCart } from "app/models/shopping-cart.model";
import { Subscription } from "rxjs/Subscription";
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent implements OnInit {

  private cart: Observable<ShoppingCart>;
  private cartSubscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
    private shoppingCartService: ShoppingCartService,
    @Inject(DOCUMENT) private document: any) {
    this.cart = this.shoppingCartService.get();
    }

  status :any;
  amount:any;
  merchant:any;
  customer:any;
  id:any;

  url :any;

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        let urlSearchParam = atob(params['transactionstate']);
        console.log(urlSearchParam);

        this.url = new URL("http://a@a.com?" + urlSearchParam);

        console.log(this.url);
        console.log(this.url.searchParams.get('status'));

        this.status = this.url.searchParams.get('status');
        this.amount = this.url.searchParams.get('amount');
        this.merchant = this.url.searchParams.get('merchantId');
        this.customer = this.url.searchParams.get('merchantCustomerId');
        this.id = this.url.searchParams.get('endToEndIdentifier');

      });
  }


   goToUrl(): void {
      this.shoppingCartService.empty();
      this.document.location.href = '/';
  }
}
