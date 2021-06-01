import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyOKComponent } from './only-ok.component';

describe('OnlyOKComponent', () => {
  let component: OnlyOKComponent;
  let fixture: ComponentFixture<OnlyOKComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnlyOKComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlyOKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
