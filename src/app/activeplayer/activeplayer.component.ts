import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../request/request';
import { filter } from 'rxjs';

@Component({
  selector: 'app-activeplayer',
  templateUrl: './activeplayer.component.html',
  styleUrls: ['./activeplayer.component.css']
})
export class ActiveplayerComponent implements OnInit{
  public request: Request[]=[];
  public filteredRequest: Request[]=[];
  public filtervalue: string='';
  constructor(public http: HttpClient){}

  filterRequest(value: string) {
    this.filteredRequest = this.request.filter(item => {
      return item.school_type.toLowerCase().includes(value.toLowerCase());
    });
  }

  ngOnInit(): void {
      let api = 'http://localhost:3000/data'
      this.http.get<Request[]>(api).subscribe((response) => {
        console.log(response);
        this.request = response;
      });
    }

  }



