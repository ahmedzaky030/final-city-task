import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { grow, nuke } from '../city-store/city.actions';
import { City } from '../city.model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() selectedCity: City;
  
  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  nuke(city: City){
   this.store.dispatch(nuke({Id:city.Id}))
  }

  grow(city: City){
    this.store.dispatch(grow({Id:city.Id}))
  }


}
