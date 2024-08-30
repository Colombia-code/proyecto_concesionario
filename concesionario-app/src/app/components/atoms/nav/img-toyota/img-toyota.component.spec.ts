import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgToyotaComponent } from './img-toyota.component';

describe('ImgToyotaComponent', () => {
  let component: ImgToyotaComponent;
  let fixture: ComponentFixture<ImgToyotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgToyotaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgToyotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
