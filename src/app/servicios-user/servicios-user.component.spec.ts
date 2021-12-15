import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosUserComponent } from './servicios-user.component';

describe('ServiciosUserComponent', () => {
  let component: ServiciosUserComponent;
  let fixture: ComponentFixture<ServiciosUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiciosUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
