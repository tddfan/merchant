import { Component, OnInit } from "@angular/core";
import { ShoppingCartService } from "../../services/shopping-cart.service";
import { PaymentOptionsDataService } from "app/services/payment-options.service";
import { Observable } from "rxjs/Observable";
import { PaymentOption } from "app/models/payment-option.model";
import { ShoppingCart } from "app/models/shopping-cart.model";


@Component({
  selector: "app-order-confirmation",
  templateUrl: "./order-confirmation.component.html"
})
export class OrderConfirmationComponent implements OnInit {


  public cart: Observable<ShoppingCart>;
  public options: Observable<PaymentOption[]>;
  public selectedOptionId;


  public constructor(private shoppingCartService: ShoppingCartService,
  private paymentOptionsDataService:PaymentOptionsDataService) {

  }

  public ngOnInit(): void {
    this.options = this.paymentOptionsDataService.all();
    this.cart = this.shoppingCartService.get();
    //this.shoppingCartService.empty();
  }



  public setPaymentOption(option: PaymentOption): void {

    this.selectedOptionId = option.id;
    console.log(this.selectedOptionId);

  }


}
