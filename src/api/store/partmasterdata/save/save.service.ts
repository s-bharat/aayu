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

import {Injectable} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {PartmasterdataService} from '../../../controllers/Partmasterdata';

@Injectable()
export class SaveFormService {
  form: FormGroup;
  constructor(
    private partmasterdataService: PartmasterdataService,
  ) {
    this.form = new FormGroup({
      body: new FormGroup({
        id: new FormControl(undefined, []),
        partMasterDataType: new FormControl(undefined, []),
        partMasterDataTypeValue: new FormControl(undefined, []),
        partMasterDataTypeCode: new FormControl(undefined, []),
      }, []),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.partmasterdataService.save(data);
  }
}
