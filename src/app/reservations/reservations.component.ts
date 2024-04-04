import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-reservations',
  standalone: true,
    imports: [
        NgForOf,
        NgIf,
      HttpClientModule
    ],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.css'
})
export class ReservationsComponent implements OnInit{
  reservations : any;
  constructor(private http : HttpClient) {
  }

  ngOnInit() {
    this.http.get("http://localhost:8888/MS-TC-RESERVATION/reservations")
      .subscribe({
        next : data => {
          this.reservations = data;
        },
        error : err => {
          console.log(err);
        }
      })
  }
}
