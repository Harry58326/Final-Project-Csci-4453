import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../request/request';

@Component({
  selector: 'app-nbaplayer',
  templateUrl: './nbaplayer.component.html',
  styleUrls: ['./nbaplayer.component.css']
})
export class NBAPlayerComponent {
    data: any[] = [];
    public age: number = 3;
    public arr: any[]=[{
      name: 'Harry',
      email: 'qq.com'},
      {
        name: "Tom",
        email: "gmail.com"
      },
      {
        name: "Jack",
        email: "126.com"
      }
    ]
    order: number = 1;

    increaseOrder(){
      this.order = this.order + 1;
    }


    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.http.get<any[]>('http://localhost:3000/data').subscribe(
        (response) => {
          console.log(response);
          this.data = response;
        },
        (error) => console.error(error)
      );
    }
  }







