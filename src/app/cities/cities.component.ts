import { Component, OnInit } from '@angular/core';
import { City } from '../city.model';
import * as citiesJson from '../../assets/cities.json';

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
  cities: City[];
  constructor() { 
    
  }

  ngOnInit(): void {
     this.cities = citiesJson.cities;
  }

}
