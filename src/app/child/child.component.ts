import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  studentList:any;
  ngOnInit(): void {
    this.studentList = this.service.getStudentList();
  }
  constructor(public service:ServicesService){

  }

}


interface Person{
  name:string,
  age:number
}

export class PersonClass{
  public status:boolean;
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
  constructor(status:boolean){
    this.status = status
  }
}