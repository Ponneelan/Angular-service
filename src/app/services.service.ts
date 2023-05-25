import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }
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
}
