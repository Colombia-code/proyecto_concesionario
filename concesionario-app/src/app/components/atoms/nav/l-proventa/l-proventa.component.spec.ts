import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LProventaComponent } from './l-proventa.component';

describe('LProventaComponent', () => {
  let component: LProventaComponent;
  let fixture: ComponentFixture<LProventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LProventaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LProventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
