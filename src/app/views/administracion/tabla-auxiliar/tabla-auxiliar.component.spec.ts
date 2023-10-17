import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaAuxiliarComponent } from './tabla-auxiliar.component';

describe('TablaAuxiliarComponent', () => {
  let component: TablaAuxiliarComponent;
  let fixture: ComponentFixture<TablaAuxiliarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaAuxiliarComponent]
    });
    fixture = TestBed.createComponent(TablaAuxiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
