import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../request/request';
import { filter } from 'rxjs';


@Component({
  selector: 'app-activeplayer',
  templateUrl: './activeplayer.component.html',
  styleUrls: ['./activeplayer.component.css']
})
export class ActiveplayerComponent implements OnInit {
  public request: Request[] = [];
  public filteredRequest: Request[] = [];
  public searchPlayerName: string = '';
  public searchTeamName: string = '';
  public searchJerseyNumber: string = '';
  public searchSchoolType: string = '';
  public searchPosition: string = '';
  public schoolTypes: string[] = ['High School', 'University', 'Community College', 'Foreign School'];
  public positions: string[] = ['PG', 'SG', 'SF', 'PF', 'C'];
  defaultImageUrl:string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/LeBron_James_%2851959977144%29_%28cropped2%29.jpg/800px-LeBron_James_%2851959977144%29_%28cropped2%29.jpg'

  constructor(private http: HttpClient) { }



  filterByPlayerName(player_name: string): void {
    this.filteredRequest = this.request.filter((req) => req.player_name.toLowerCase().includes(player_name.toLowerCase()));
  }

  filterByTeamName(team_name: string): void {
    this.filteredRequest = this.request.filter((req) => req.teams.toLowerCase().includes(team_name.toLowerCase()));
  }

  filterByJerseyNumber(jersey_number: string): void {
    this.filteredRequest = this.request.filter((req) => req.jersey_number === parseInt(jersey_number));
  }

  filterBySchoolType(school_type: string): void {
    this.filteredRequest = this.request.filter((req) => req.school_type === school_type);
  }

  filterByPosition(position: string): void {
    this.filteredRequest = this.request.filter((req) => req.position === position);
  }

  ngOnInit(): void {
    let api = 'http://localhost:3000/data'
    this.http.get<Request[]>(api).subscribe((response) => {
      this.request = response;
      this.filteredRequest = response;
      console.log(this.request);
    });
  }
}
