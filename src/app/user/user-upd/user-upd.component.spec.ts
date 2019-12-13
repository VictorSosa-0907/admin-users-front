import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserUpdComponent } from './user-upd.component';

describe('UserUpdComponent', () => {
  let component: UserUpdComponent;
  let fixture: ComponentFixture<UserUpdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserUpdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserUpdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
