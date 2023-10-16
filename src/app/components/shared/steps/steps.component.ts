import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class StepsComponent implements OnInit, OnChanges  {
  @Input() activeIndex: number = 0;

  @Input() model: MenuItem[] = [];

  @Input() readonly: boolean = true;

  @Output() activeIndexChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.model.length)
    // console.log(this.activeIndex)
  }

  itemClick(event: Event, item: MenuItem, i: number) {
    if (this.readonly || item.disabled) {
      event.preventDefault();
      return;
    }

    this.activeIndexChange.emit(i);

    if (!item.url && !item.routerLink) {
      event.preventDefault();
    }

    if (item.command) {
      item.command({
        originalEvent: event,
        item: item,
        index: i
      });
    }
  }

  ngOnDestroy() { }

}
