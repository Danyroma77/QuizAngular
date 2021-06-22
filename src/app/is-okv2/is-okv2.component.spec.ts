import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsOKV2Component } from './is-okv2.component';

describe('IsOKV2Component', () => {
  let component: IsOKV2Component;
  let fixture: ComponentFixture<IsOKV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsOKV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsOKV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
