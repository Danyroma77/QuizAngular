import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAPPComponent } from './info-app.component';

describe('InfoAPPComponent', () => {
  let component: InfoAPPComponent;
  let fixture: ComponentFixture<InfoAPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
