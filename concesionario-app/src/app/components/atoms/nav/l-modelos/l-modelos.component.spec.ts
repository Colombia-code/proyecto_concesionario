import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LModelosComponent } from './l-modelos.component';

describe('LModelosComponent', () => {
  let component: LModelosComponent;
  let fixture: ComponentFixture<LModelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LModelosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
