import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  apiData$: any;

  ngOnInit(): void {
    this.apiData$ = this.apiService.getData();
  }
}
