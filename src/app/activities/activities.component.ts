import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.css'
})
export class ActivitiesComponent implements OnInit{
  activities : any;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8888/MS-TC-ACTIVITY/activities")
      .subscribe({
        next: data => {
          this.activities = data;
        },
        error : err => {
          console.log(err)
        }
      })
  }

}
