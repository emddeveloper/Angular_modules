import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgemodalComponent } from './agemodal.component';

describe('AgemodalComponent', () => {
  let component: AgemodalComponent;
  let fixture: ComponentFixture<AgemodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgemodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgemodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
