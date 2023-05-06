import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../request/request';

@Component({
  selector: 'app-inactiveplayer',
  templateUrl: './inactiveplayer.component.html',
  styleUrls: ['./inactiveplayer.component.css']
})
export class InactiveplayerComponent implements OnInit {
  public requestInactive: Request[]=[];
  public filteredInactiveRequest: Request[] = [];
  public searchPlayerName: string = '';
  public searchTeamName: string = '';
  public searchJerseyNumber: string = '';
  public searchSchoolType: string = '';
  public searchPosition: string = '';
  public schoolTypes: string[] = ['High School', 'University', 'Community College', 'Foreign School'];
  public positions: string[] = ['PG', 'SG', 'SF', 'PF', 'C'];



  constructor(private http: HttpClient){}

  filterByPlayerName(player_name: string): void {
    this.filteredInactiveRequest = this.requestInactive.filter((req) => req.player_name.toLowerCase().includes(player_name.toLowerCase()));
  }

  filterByTeamName(team_name: string): void {
    this.filteredInactiveRequest = this.requestInactive.filter((req) => req.teams.toLowerCase().includes(team_name.toLowerCase()));
  }

  filterByJerseyNumber(jersey_number: string): void {
    this.filteredInactiveRequest = this.requestInactive.filter((req) => req.jersey_number === parseInt(jersey_number));
  }

  filterBySchoolType(school_type: string): void {
    this.filteredInactiveRequest = this.requestInactive.filter((req) => req.school_type === school_type);
  }

  filterByPosition(position: string): void {
    this.filteredInactiveRequest = this.requestInactive.filter((req) => req.position === position);
  }


  ngOnInit(): void {
    let api = 'http://localhost:3000/dataInactive';
    this.http.get<Request[]>(api).subscribe((response) => {
      this.requestInactive = response;
      this.filteredInactiveRequest = this.requestInactive;
      console.log(this.requestInactive);
    });
  }




}
