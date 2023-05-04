import { Component } from '@angular/core';
import { Request } from '../request/request';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent {
constructor(private http: HttpClient){}
  request: Request = {
    height: '',
    weight: 0,
    player_name: '',
    country: '',
    school_name: '',
    jersey_number: 0,
    position: '',
    school_type: 'High School',
    status: 'Active',
    teams: ''
  };

  submitForm() {
    this.http
      .post('http://localhost:3000/post', this.request)
      .subscribe(
        (response) => {
          console.log('Data sent successfully:', response);
        },
        (error) => {
          console.error('Error sending data:', error);
        }
      );
  }

}
