import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParthistoryComponent } from './parthistory.component';

describe('ParthistoryComponent', () => {
  let component: ParthistoryComponent;
  let fixture: ComponentFixture<ParthistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParthistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParthistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
