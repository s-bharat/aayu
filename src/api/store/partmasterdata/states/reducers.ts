/* tslint:disable:max-line-length */
/**
 * Part Number Management System. More on: http://example.com/pnms-api
 * 0.0.1-SNAPSHOT
 * PNMS
 * Please read on https://example.com/terms-of-service
 * Example LLC
 * http://localhost:8081
 * contact@test.com
 * Apache License v2.0
 * https://www.apache.org/licenses/LICENSE-2.0.html
 * undefined
 */

import {createFeatureSelector} from '@ngrx/store';

import {HttpErrorResponse} from '@angular/common/http';
import * as __model from '../../../../model';
import * as actions from './actions';

export interface State {
  data: __model.PartMasterDataDTO[] | null;
  loading: boolean;
  error: HttpErrorResponse | null;
}

export const initialState: State = {
  data: null,
  loading: false,
  error: null,
};

export const selectorName = 'Partmasterdata_';
export const getStateSelector = createFeatureSelector<State>(selectorName);

export function Reducer(
  state: State = initialState,
  action: actions.Action): State {
  switch (action.type) {
    case actions.Actions.START: return {...state, loading: true, error: null};
    case actions.Actions.SUCCESS: return {...state, data: action.payload, loading: false};
    case actions.Actions.ERROR: return {...state, error: action.payload, loading: false};
    default: return state;
  }
}
