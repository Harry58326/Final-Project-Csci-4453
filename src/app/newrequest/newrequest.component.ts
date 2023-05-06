import { Component } from '@angular/core';
import { Request } from '../request/request';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent {
constructor(private http: HttpClient, private snack: MatSnackBar){}
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
          this.snack.open('You have added a new NBA player successfully')
        },
        (error) => {
          this.snack.open('Error in sending data')
        }
      );
  }

}
