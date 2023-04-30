import { Component } from '@angular/core';
import { Request } from '../request/request';

@Component({
  selector: 'app-newrequest',
  templateUrl: './newrequest.component.html',
  styleUrls: ['./newrequest.component.css']
})
export class NewrequestComponent {
submitForm() {
throw new Error('Method not implemented.');
}
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

}
