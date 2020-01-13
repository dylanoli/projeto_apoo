import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationSnackComponent } from './notification-snack.component';

describe('NotificationSnackComponent', () => {
  let component: NotificationSnackComponent;
  let fixture: ComponentFixture<NotificationSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
