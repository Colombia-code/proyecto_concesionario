import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgAutoamericaComponent } from './img-autoamerica.component';

describe('ImgAutoamericaComponent', () => {
  let component: ImgAutoamericaComponent;
  let fixture: ComponentFixture<ImgAutoamericaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgAutoamericaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgAutoamericaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
