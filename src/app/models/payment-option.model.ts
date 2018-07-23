export class PaymentOption {
  public id: string;
  public name: string;
  public description: string;

  public updateFrom(src: PaymentOption): void {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
  }
}
