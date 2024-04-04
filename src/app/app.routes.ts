import { Routes } from '@angular/router';
import {AgenciesComponent} from "./agencies/agencies.component";
import {ActivitiesComponent} from "./activities/activities.component";
import {ReservationsComponent} from "./reservations/reservations.component";

export const routes: Routes = [
  { path : "agencies", component : AgenciesComponent },
  { path : "activities", component : ActivitiesComponent },
  { path : "reservations", component : ReservationsComponent }
];
