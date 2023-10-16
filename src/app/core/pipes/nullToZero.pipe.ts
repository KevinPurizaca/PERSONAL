import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullToZero'
})
export class NullToZeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value == null || isNaN(value) || value == '') {
      return 0;
    }
    return value;
  }

}
