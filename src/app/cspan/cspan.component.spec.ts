import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CspanComponent } from './cspan.component';

describe('CspanComponent', () => {
  let component: CspanComponent;
  let fixture: ComponentFixture<CspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CspanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
