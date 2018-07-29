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

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
        this.status = params['status'];
        this.amount = params['amount'];
        this.merchant = params['merchant'];
      });
  }


   goToUrl(): void {
      this.shoppingCartService.empty();
      this.document.location.href = '/';
  }
}
