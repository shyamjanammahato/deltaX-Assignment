import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewArtistComponent } from './add-new-artist.component';

describe('AddNewArtistComponent', () => {
  let component: AddNewArtistComponent;
  let fixture: ComponentFixture<AddNewArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
