import { createAction, props } from '@ngrx/store';

export const SET_LOADING_ACTIONS = '[shared state] set loading spinner';
export const SET_ERROR_MESSAGE = '[shared state] set error message';

export const setLoadingSpinner = createAction(
  SET_LOADING_ACTIONS,
  props<{ status: boolean }>()
);

export const setErrorMessage = createAction(
  SET_ERROR_MESSAGE,
  props<{ message: string }>()
);
