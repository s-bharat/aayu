import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepartComponent } from './createpart.component';

describe('CreatepartComponent', () => {
  let component: CreatepartComponent;
  let fixture: ComponentFixture<CreatepartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
