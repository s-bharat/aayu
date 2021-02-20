import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpartlistComponent } from './fullpartlist.component';

describe('FullpartlistComponent', () => {
  let component: FullpartlistComponent;
  let fixture: ComponentFixture<FullpartlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullpartlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullpartlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
