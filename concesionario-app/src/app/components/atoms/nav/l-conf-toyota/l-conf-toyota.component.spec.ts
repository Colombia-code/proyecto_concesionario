import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LConfToyotaComponent } from './l-conf-toyota.component';

describe('LConfToyotaComponent', () => {
  let component: LConfToyotaComponent;
  let fixture: ComponentFixture<LConfToyotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LConfToyotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LConfToyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
