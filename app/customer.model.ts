import { SaleRecord } from './saleRecord.model';

export class Customer {
  constructor (public name: string, public tab: number, public salesArray: SaleRecord[]){}
}
