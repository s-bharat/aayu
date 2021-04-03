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

import * as __model from '../model';

export interface PartDTO {
  id?: string;
  partName?: string;
  partNumber?: string;
  PartNumberFields?: __model.PartNumberFields;
  PartNameFields?: __model.PartNameFields;
  partStatus?: string;
  /** format: date-time */
  createdDate?: string;
  /** format: date-time */
  lastUpdatedDate?: string;
  user?: __model.User;
}
