import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveplayerComponent } from './activeplayer.component';

describe('ActiveplayerComponent', () => {
  let component: ActiveplayerComponent;
  let fixture: ComponentFixture<ActiveplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
