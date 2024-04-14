import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesCardsComponent } from './favorites-cards.component';

describe('FavoritesCardsComponent', () => {
  let component: FavoritesCardsComponent;
  let fixture: ComponentFixture<FavoritesCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesCardsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
