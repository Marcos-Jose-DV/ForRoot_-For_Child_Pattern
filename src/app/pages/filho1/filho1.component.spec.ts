import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Filho1Component } from './filho1.component';

describe('Filho1Component', () => {
  let component: Filho1Component;
  let fixture: ComponentFixture<Filho1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Filho1Component]
    });
    fixture = TestBed.createComponent(Filho1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
