import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubLeaderboardComponent } from './sub-leaderboard.component';

describe('SubLeaderboardComponent', () => {
  let component: SubLeaderboardComponent;
  let fixture: ComponentFixture<SubLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubLeaderboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
