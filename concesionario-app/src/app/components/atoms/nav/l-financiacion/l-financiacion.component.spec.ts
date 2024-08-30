import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFinanciacionComponent } from './l-financiacion.component';

describe('LFinanciacionComponent', () => {
  let component: LFinanciacionComponent;
  let fixture: ComponentFixture<LFinanciacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LFinanciacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LFinanciacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
