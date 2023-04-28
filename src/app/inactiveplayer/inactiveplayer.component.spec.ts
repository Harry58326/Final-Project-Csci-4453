import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InactiveplayerComponent } from './inactiveplayer.component';

describe('InactiveplayerComponent', () => {
  let component: InactiveplayerComponent;
  let fixture: ComponentFixture<InactiveplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InactiveplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InactiveplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
