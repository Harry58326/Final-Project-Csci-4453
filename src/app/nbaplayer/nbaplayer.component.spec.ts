import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAPlayerComponent } from './nbaplayer.component';

describe('NBAPlayerComponent', () => {
  let component: NBAPlayerComponent;
  let fixture: ComponentFixture<NBAPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NBAPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NBAPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
