import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regresar',
  templateUrl: './regresar.component.html',
  styleUrls: ['./regresar.component.scss']
})
export class RegresarComponent {

  @Input() url:string = '';

  constructor(
    private router: Router
  ) { }

  Ir() {
    this.router.navigate([this.url]);
  }

}
