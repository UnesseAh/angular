import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {CommonModule, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-agencies',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './agencies.component.html',
  styleUrl: './agencies.component.css'
})
export class AgenciesComponent implements OnInit{
  agencies : any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8888/MS-TC-AGENCY/agencies")
      .subscribe({
        next: data => {
          this.agencies = data;
        },
        error : err => {
          console.log(err)
        }
      })
  }

}
