import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LEntregaInmediataComponent } from './l-entrega-inmediata.component';

describe('LEntregaInmediataComponent', () => {
  let component: LEntregaInmediataComponent;
  let fixture: ComponentFixture<LEntregaInmediataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LEntregaInmediataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LEntregaInmediataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
