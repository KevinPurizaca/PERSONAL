import { CommonModule, CurrencyPipe } from "@angular/common";
import { NgModule } from "@angular/core";
import { CurrencyFormatPipe } from "./currency-format.pipe";
import { CurrencyInfinityPipe } from './currency-infinity.pipe';
import { CurrencyNanPipe } from "./currency-nan.pipe";
import { FirstCharUpperPipe } from './firstCharUpper.pipe';
import { NullToZeroPipe } from './nullToZero.pipe';
import { PercentSalesPipe } from './percent-sales.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrencyFormatPipe,
    CurrencyNanPipe,
    PercentSalesPipe,
    FirstCharUpperPipe,
    CurrencyInfinityPipe,
    NullToZeroPipe
  ],
  exports: [
    CurrencyFormatPipe,
    CurrencyNanPipe,
    PercentSalesPipe,
    FirstCharUpperPipe,
    CurrencyInfinityPipe,
    NullToZeroPipe
  ],
  providers: [CurrencyPipe]
})

export class PipesModule { }
