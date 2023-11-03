import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho3Component } from './filho3.component';

describe('Filho3Component', () => {
  let component: Filho3Component;
  let fixture: ComponentFixture<Filho3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Filho3Component]
    });
    fixture = TestBed.createComponent(Filho3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
