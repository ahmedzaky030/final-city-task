import { Component, OnInit } from '@angular/core';
import { City } from '../city.model';
import * as citiesJson from '../../assets/cities.json';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CitiesState } from '../city-store/city.reducer';

export interface Tile {
  cols: number;
  rows: number;
  city?: City;
}


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {
  cities$: City[];
  constructor(private store: Store) {
   
 
  }

  ngOnInit(): void {
    this.store.select((state:CitiesState) => state.cities).subscribe(cities => {
      this.cities$ = cities['cities'];
    })
  }

}
