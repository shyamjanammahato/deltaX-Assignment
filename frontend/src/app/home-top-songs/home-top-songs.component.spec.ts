import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopSongsComponent } from './home-top-songs.component';

describe('HomeTopSongsComponent', () => {
  let component: HomeTopSongsComponent;
  let fixture: ComponentFixture<HomeTopSongsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTopSongsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTopSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
