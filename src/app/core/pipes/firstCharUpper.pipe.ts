import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharUpper'
})
export class FirstCharUpperPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let x = value.slice(0,1).toUpperCase();
    let y = value.slice(1).toLowerCase();
    return x+y;
  }

}
