import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetwComponent } from './tweetw.component';

describe('TweetwComponent', () => {
  let component: TweetwComponent;
  let fixture: ComponentFixture<TweetwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
