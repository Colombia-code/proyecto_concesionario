import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LFlotasComponent } from './l-flotas.component';

describe('LFlotasComponent', () => {
  let component: LFlotasComponent;
  let fixture: ComponentFixture<LFlotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LFlotasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LFlotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
