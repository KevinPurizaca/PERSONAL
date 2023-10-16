import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  constructor(
    private cp: CurrencyPipe
  ) { }

  transform(value: any, args?: any): any {
    return this.cp.transform(value, '', '', '', 'en-PE');
  }

}
