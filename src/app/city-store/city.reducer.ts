import { createReducer, on } from "@ngrx/store";
import { City } from "../city.model";
import * as citiesJson from '../../assets/cities.json';
import { nuke, grow } from "./city.actions";

export interface CitiesState {
    cities: City[];
}

export const initialState = {
    cities: citiesJson.cities.map((v,i) => ({...v, Id: i+1})) as City[]
} 
 
export const CityReducer = createReducer(
  initialState,
  on(nuke, (state, {Id}) => {
      let selectedCity = state.cities.find(v => v.Id == Id);
      selectedCity.Population -= 5000000;
      return {...state, ...selectedCity};
  }),
  on(grow, (state, {Id}) => {
    let selectedCity = state.cities.find(v => v.Id == Id);
    selectedCity.Population += 1000000;
    return {...state, ...selectedCity};
  }),
 
);
 
