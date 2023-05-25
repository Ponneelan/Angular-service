import { Component,OnInit } from '@angular/core';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit{
  data:any
  constructor(public service:ServicesService){}
  ngOnInit(): void {
    this.data = this.service.getStudent()
    .subscribe((data)=>{this.data = data;console.log('data...',this.data)})
  }
}
