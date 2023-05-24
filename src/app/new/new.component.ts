import { Component } from '@angular/core';
import { PersonClass } from '.././child/child.component';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent {
  child: PersonClass;
  constructor() {
    this.child = new PersonClass();
  }
}
