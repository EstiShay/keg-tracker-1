export class Keg {
  public volume: number = 1984;
  public onSale: boolean = false;
  constructor (public name: string, public brand: string, public price: number, public alcoholContent: number){}
}
