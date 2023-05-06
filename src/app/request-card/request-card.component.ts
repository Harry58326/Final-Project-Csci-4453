import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-request-card',
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  constructor(public http: HttpClient){}
  postData() {
    alert('post data');
    const api = 'http://localhost:3001/post';
    const data = { name: 'Harry', age: 22 };
    const headers = { 'Content-Type': 'application/json' };

    this.http.post(api, data, { headers }).subscribe((res) => {
      console.log(res);
    });
  }


}
