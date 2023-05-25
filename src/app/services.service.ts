import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }
  getStudentList() {
    return [
      {
        name: "Ponneelan",
        age: 20
      },
      {
        name: "Vasanth",
        age: 22
      }
    ]
  }
  getFirst(){
      return "one more";
    }
  getStudent(){
    return this.http.get('http://localhost:3000/getall');
  }
}
