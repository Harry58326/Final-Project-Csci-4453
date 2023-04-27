import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nbaplayer',
  templateUrl: './nbaplayer.component.html',
  styleUrls: ['./nbaplayer.component.css']
})
export class NBAPlayerComponent {
    data: any[] = [];

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







