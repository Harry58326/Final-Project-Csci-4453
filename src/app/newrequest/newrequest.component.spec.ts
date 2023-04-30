import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrequestComponent } from './newrequest.component';

describe('NewrequestComponent', () => {
  let component: NewrequestComponent;
  let fixture: ComponentFixture<NewrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
