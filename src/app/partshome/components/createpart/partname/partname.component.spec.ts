import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnameComponent } from './partname.component';

describe('PartnameComponent', () => {
  let component: PartnameComponent;
  let fixture: ComponentFixture<PartnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
