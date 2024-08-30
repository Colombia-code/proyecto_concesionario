import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LUsadosComponent } from './l-usados.component';

describe('LUsadosComponent', () => {
  let component: LUsadosComponent;
  let fixture: ComponentFixture<LUsadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LUsadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LUsadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
