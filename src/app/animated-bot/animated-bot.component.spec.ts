import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedBotComponent } from './animated-bot.component';

describe('AnimatedBotComponent', () => {
  let component: AnimatedBotComponent;
  let fixture: ComponentFixture<AnimatedBotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedBotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
