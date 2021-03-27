import { createAction, props } from '@ngrx/store';

interface Action {
    type: string;
    payload: string;
}

export const nuke = createAction('[City Component] Nuke', props<{Id: number}>());
export const grow = createAction('[City Component] Grow',props<{Id: number}>());
