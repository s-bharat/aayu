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
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PartsService} from '../../../controllers/Parts';

@Injectable()
export class UpdatePartFormService {
  form: FormGroup;
  constructor(
    private partsService: PartsService,
  ) {
    this.form = new FormGroup({
      body: new FormGroup({
        id: new FormControl(undefined, []),
        partName: new FormControl(undefined, []),
        partNumber: new FormControl(undefined, []),
        PartNumberFields: new FormGroup({
          partPartmasterdata: new FormControl(undefined, []),
          vehicleType: new FormControl(undefined, []),
          vehicleCode: new FormControl(undefined, []),
          vehicleModule: new FormControl(undefined, []),
        }, []),
        PartNameFields: new FormGroup({
          inputField1: new FormControl(undefined, []),
          inputField2: new FormControl(undefined, []),
          inputField3: new FormControl(undefined, []),
          inputField4: new FormControl(undefined, []),
        }, []),
        partStatus: new FormControl(undefined, []),
        createdDate: new FormControl(undefined, []),
        lastUpdatedDate: new FormControl(undefined, []),
        user: new FormGroup({
          userID: new FormControl(undefined, []),
          firstName: new FormControl(undefined, []),
          lastName: new FormControl(undefined, []),
          email: new FormControl(undefined, []),
        }, []),
      }, [Validators.required]),
    });
  }

  submit(raw = false) {
    const data = raw ?
      this.form.getRawValue() :
      this.form.value;
    return this.partsService.updatePart(data);
  }
}
