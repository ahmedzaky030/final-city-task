import { Component, OnInit } from '@angular/core';
import { City } from '../city.model';
import * as citiesJson from '../../assets/cities.json';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CitiesState } from '../city-store/city.reducer';
import { MatSliderChange } from '@angular/material/slider';
import { filterCitiesByPopulation } from '../city-store/city.actions';

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
  sliderValue: string;
  constructor(private store: Store) {
   
 
  }

  ngOnInit(): void {
    this.store.select((state:CitiesState) => state.cities).subscribe(cities => {
      this.cities$ = cities['cities'];
    })
  }

  formatLabel(value: number) {
    if (value >= 1000000) {
      return Math.round(value / 1000000) + 'M';
    }
    return value;
  }

  onSliderChange(change: MatSliderChange){
   this.sliderValue = Math.round(change.value / 1000000) + 'M';;
   this.store.dispatch(filterCitiesByPopulation({population:change.value}))
  }
}
