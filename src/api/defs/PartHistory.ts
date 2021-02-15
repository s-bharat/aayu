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

export interface PartHistory {
  id?: string;
  partName?: string;
  partNumber?: string;
  /** format: date-time */
  updatedOn?: string;
  user?: __model.User;
  version?: __model.Version;
  action?: string;
  partStatus?: string;
}
