import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";
import { PaymentOption } from "../models/payment-option.model";
import { CachcingServiceBase } from "./caching.service";

@Injectable()
export class PaymentOptionsDataService extends CachcingServiceBase {

  private options: Observable<PaymentOption[]>;


  public constructor(private http: Http) {
    super();
  }

  public all(): Observable<PaymentOption[]> {
    return this.cache<PaymentOption[]>(() => this.options,
                                        (val: Observable<PaymentOption[]>) => this.options = val,
                                        () => this.http
                                                  .get("./assets/payment-options.json")
                                                  .map((response) => response.json()
                                                                             .map((item) => {
                                                                                let model = new PaymentOption();
                                                                                model.updateFrom(item);
                                                                                return model;
                                                                              })));

  }
}
