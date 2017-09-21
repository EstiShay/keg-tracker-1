import { Customer } from './customer.model';

export class SaleRecord {
  constructor (public customer: Customer, public price: number, public beer: string){}
}
