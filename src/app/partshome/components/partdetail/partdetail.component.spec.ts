import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartdetailComponent } from './partdetail.component';

describe('PartdetailComponent', () => {
  let component: PartdetailComponent;
  let fixture: ComponentFixture<PartdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
