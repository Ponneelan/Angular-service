import { Component,OnInit } from '@angular/core';
import { ServicesService,getStudent } from '../services.service'
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit{
  data:any = [];
  constructor(public service:ServicesService){}
  ngOnInit(): void {
    this.service.getStudent().subscribe((data)=>{this.data = of(data)});
  }
}
