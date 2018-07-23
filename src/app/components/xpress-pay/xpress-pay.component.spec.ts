import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XpressPayComponent } from './xpress-pay.component';

describe('XpressPayComponent', () => {
  let component: XpressPayComponent;
  let fixture: ComponentFixture<XpressPayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XpressPayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XpressPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
