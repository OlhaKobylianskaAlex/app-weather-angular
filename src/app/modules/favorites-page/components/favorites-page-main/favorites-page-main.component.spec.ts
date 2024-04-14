import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageMainComponent } from './favorites-page-main.component';

describe('FavoritesPageMainComponent', () => {
  let component: FavoritesPageMainComponent;
  let fixture: ComponentFixture<FavoritesPageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPageMainComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
