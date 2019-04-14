import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottombodyComponent } from './bottombody.component';

describe('BottombodyComponent', () => {
  let component: BottombodyComponent;
  let fixture: ComponentFixture<BottombodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottombodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottombodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
