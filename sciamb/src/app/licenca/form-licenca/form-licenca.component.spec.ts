import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLicencaComponent } from './form-licenca.component';

describe('FormLicencaComponent', () => {
  let component: FormLicencaComponent;
  let fixture: ComponentFixture<FormLicencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLicencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLicencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
