import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyNaN'
})
export class CurrencyNanPipe implements PipeTransform {

  constructor(
    private cp: CurrencyPipe
  ) { }

  transform(value: any, args?: any): any {
    let number = Number(value)
    if(!isNaN(number)) {
        return this.cp.transform(number, '', '', '', 'en-PE');
    }
    return value;
  }

}
