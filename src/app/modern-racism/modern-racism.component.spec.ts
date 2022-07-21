import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModernRacismComponent } from './modern-racism.component';

describe('ModernRacismComponent', () => {
  let component: ModernRacismComponent;
  let fixture: ComponentFixture<ModernRacismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModernRacismComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModernRacismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
