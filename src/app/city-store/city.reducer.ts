import { createReducer, on } from "@ngrx/store";
import { City } from "../city.model";
import * as citiesJson from '../../assets/cities.json';
import { nuke, grow, filterCitiesByPopulation } from "./city.actions";

export interface CitiesState {
    cities: City[];
}

export const initialState = {
    cities: citiesJson.cities.map((v,i) => ({...v, Id: i+1})) as City[]
} 
 
export const CityReducer = createReducer(
  initialState,
  on(nuke, (state, {city}) => {
    return {...state, 
      cities:state.cities.map(value => {
        if(value.Id !== city.Id ){ 
          return value;
        } else {
          return { ...value, Population: value.Population - 5000000}
        }
        
      })
    }
  }),
  
  on(grow, (state, {city}) => {
    return {...state, 
      cities:state.cities.map(value => {
        if(value.Id !== city.Id ){ 
          return value;
        } else {
          return { ...value, Population: value.Population + 1000000}
        }
        
      })
    }
  }),

  on(filterCitiesByPopulation, (state, {population}) => {
    let filteredCities = citiesJson.cities.filter(value => value.Population >= population) as City[];
    return {...state, 
      cities: filteredCities
    }
  }),
 
);
 
