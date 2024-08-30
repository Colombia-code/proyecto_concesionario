import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgResponsComponent } from './img-respons.component';

describe('ImgResponsComponent', () => {
  let component: ImgResponsComponent;
  let fixture: ComponentFixture<ImgResponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImgResponsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgResponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
