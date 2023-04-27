import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nbaplayer',
  templateUrl: './nbaplayer.component.html',
  styleUrls: ['./nbaplayer.component.css']
})
export class NBAPlayerComponent {
  constructor(public http: HttpClient){}
getData() {
alert("get data")
}

}
