import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartmasterdataComponent } from './partmasterdata.component';

describe('PartmasterdataComponent', () => {
  let component: PartmasterdataComponent;
  let fixture: ComponentFixture<PartmasterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartmasterdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartmasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
