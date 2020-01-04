import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciarLicencaComponent } from './gerenciar-licenca.component';

describe('GerenciarLicencaComponent', () => {
  let component: GerenciarLicencaComponent;
  let fixture: ComponentFixture<GerenciarLicencaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GerenciarLicencaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GerenciarLicencaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
