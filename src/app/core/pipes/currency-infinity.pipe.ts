import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyInfinity'
})
export class CurrencyInfinityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (isNaN(value) || !isFinite(value)) {
      return '0.00';
    }
    return value;
  }

}
