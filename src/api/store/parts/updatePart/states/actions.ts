/* tslint:disable:max-line-length max-classes-per-file */
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

import {HttpErrorResponse} from '@angular/common/http';
import {Action} from '@ngrx/store';
import {UpdatePartParams} from '../../../../controllers/Parts';
import * as __model from '../../../../model';

export enum Actions {
  START = '[Parts updatePart] Start',
  SUCCESS = '[Parts updatePart] Success',
  ERROR = '[Parts updatePart] Error',
}

export class Start implements Action {
  readonly type = Actions.START;
  constructor(public payload: UpdatePartParams) {}
}

export class Success implements Action {
  readonly type = Actions.SUCCESS;
  constructor(public payload: __model.ResponseEntityObject) {}
}

export class Error implements Action {
  readonly type = Actions.ERROR;
  constructor(public payload: HttpErrorResponse) {}
}

export type UpdatePartAction = Start | Success | Error;
