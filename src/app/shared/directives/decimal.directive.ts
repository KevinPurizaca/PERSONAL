import { Directive, ElementRef, HostListener, Input } from "@angular/core";

/**
 * No usar con input type=number, no funcionará,
 * preferentemente usar con input type=text
 */
@Directive({
	selector: "[decimal]",
})
export class DecimalDirective {
	// TECLAS PERMITIDAS
	/*private specialKeys: Array<string> = [
		"Backspace",
		"Tab",
		"Delete",
		"Insert",
	];*/

	@Input() min!: number;
	@Input() max!: number;
	@Input() decimalPlaces!: number;
  @Input("negative") negative: number = 0;
	constructor(private el: ElementRef) { }



  private checkAllowNegative(value: string) {
    if (this.decimalPlaces <= 0) {
      return String(value).match(new RegExp(/^-?\d+$/));
    } else {
      var regExpString =
        "^-?\\s*((\\d+(\\.\\d{0," +
        this.decimalPlaces +
        "})?)|((\\d*(\\.\\d{1," +
        this.decimalPlaces +
        "}))))\\s*$";
      return String(value).match(new RegExp(regExpString));
    }
  }

  private check(value: string) {
    if (this.decimalPlaces <= 0) {
      return String(value).match(new RegExp(/^\d+$/));
    } else {
      var regExpString =
        "^\\s*((\\d+(\\.\\d{0," +
        this.decimalPlaces +
        "})?)|((\\d*(\\.\\d{1," +
        this.decimalPlaces +
        "}))))\\s*$";
      return String(value).match(new RegExp(regExpString));
    }
  }

  private run(oldValue:any) {
    setTimeout(() => {
      let currentValue: string = this.el.nativeElement.value;
      let allowNegative = this.negative > 0 ? true : false;

      if (allowNegative) {
        if (
          !["", "-"].includes(currentValue) &&
          !this.checkAllowNegative(currentValue)
        ) {
          this.el.nativeElement.value = oldValue;
        }
      } else {
        if (currentValue !== "" && !this.check(currentValue)) {
          this.el.nativeElement.value = oldValue;
        }
      }
    });
  }


  @HostListener("keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    this.run(this.el.nativeElement.value);
  }

  @HostListener("paste", ["$event"])
  onPaste(event: ClipboardEvent) {
    this.run(this.el.nativeElement.value);
  }

}
