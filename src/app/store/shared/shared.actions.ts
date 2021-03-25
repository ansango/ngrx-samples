import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTIONS = '[shared state] ste loading spinner';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTIONS,
  props<{ status: boolean }>()
);
