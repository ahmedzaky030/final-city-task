import { createAction, props } from '@ngrx/store';
import { City } from '../city.model';

interface Action {
    type: string;
    payload: string;
}

export const nuke = createAction('[City Component] Nuke', props<{city: City}>());
export const grow = createAction('[City Component] Grow',props<{city: City}>());
export const filterCitiesByPopulation = createAction('[Cities Component] Filter By Population',props<{population: Number}>());
