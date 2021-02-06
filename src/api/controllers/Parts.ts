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

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import * as __model from '../model';

export interface ByPartNumberParams {
  /** The name that needs to be fetched. Use user1 for testing.  */
  partNumber: string;
}

export interface CreateNewPartParams {
  /** List of user object */
  body: __model.PartDTO;
}

export interface GetPartHistoryParams {
  /** The Number for which History needs to be fetched  */
  partNumber: string;
}

export interface UpdatePartParams {
  /** List of user object */
  body: __model.PartDTO;
}

@Injectable()
export class PartsService {
  constructor(private http: HttpClient) {}

  /**
   * Get user by user name
   * http://undefined/swagger/swagger-ui.html#!/parts/findByPartNumber
   */
  byPartNumber(params: ByPartNumberParams): Observable<__model.PartDTO> {
    const pathParams = {
      partNumber: params.partNumber,
    };
    return this.http.get<__model.PartDTO>(`/byPartNumber/${pathParams.partNumber}`);
  }

  /**
   * Create New Part by providing required object
   * http://undefined/swagger/swagger-ui.html#!/parts/createNewPart
   */
  createNewPart(params: CreateNewPartParams): Observable<__model.ResponseEntityObject> {
    const bodyParams = params.body;

    return this.http.post<__model.ResponseEntityObject>(`/createNewPart`, bodyParams || {});
  }

  /**
   * Get Parts History
   * http://undefined/swagger/swagger-ui.html#!/parts/getPartHistory
   */
  getPartHistory(params: GetPartHistoryParams): Observable<__model.PartHistory[]> {
    const pathParams = {
      partNumber: params.partNumber,
    };
    return this.http.get<__model.PartHistory[]>(`/getPartHistory/${pathParams.partNumber}`);
  }

  /**
   * Update existing Part by providing list
   * http://undefined/swagger/swagger-ui.html#!/parts/updatePart
   */
  updatePart(params: UpdatePartParams): Observable<__model.ResponseEntityObject> {
    const bodyParams = params.body;

    return this.http.put<__model.ResponseEntityObject>(`/updatePart`, bodyParams || {});
  }
}
