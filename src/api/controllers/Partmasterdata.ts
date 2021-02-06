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

export interface SaveParams {
  body?: __model.PartMasterDataDTO;
}

@Injectable()
export class PartmasterdataService {
  constructor(private http: HttpClient) {}

  /**
   * Get all Master Data
   * http://undefined/swagger/swagger-ui.html#!/partmasterdata/getMasterData
   */
  (): Observable<__model.PartMasterDataDTO[]> {
    return this.http.get<__model.PartMasterDataDTO[]>(`/`);
  }

  /** http://undefined/swagger/swagger-ui.html#!/partmasterdata/saveOrUpdatePartMasterData */
  save(params: SaveParams): Observable<__model.ResponseEntityObject> {
    const bodyParams = params.body;

    return this.http.post<__model.ResponseEntityObject>(`/save`, bodyParams || {});
  }
}
