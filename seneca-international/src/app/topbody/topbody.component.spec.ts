import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbodyComponent } from './topbody.component';

describe('TopbodyComponent', () => {
  let component: TopbodyComponent;
  let fixture: ComponentFixture<TopbodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopbodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
