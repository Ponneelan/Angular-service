import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  person:PersonClass;
  constructor(){
    this.person = new PersonClass()
  }
}


interface Person{
  name:string,
  age:number
}

export class PersonClass{
  public personObj:Person[] = [
    {
      name:"Ponneelan",
      age:20
    },
    {
      name:"Vasanth",
      age:22
    }
  ]
}