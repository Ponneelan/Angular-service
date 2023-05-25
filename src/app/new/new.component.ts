import { Component,OnInit } from '@angular/core';
import { PersonClass } from '.././child/child.component';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  studentList:any;
  ngOnInit(): void {
    this.studentList = this.service.getStudentList();
  }
  constructor(public service:ServicesService) {
  
  }
}
