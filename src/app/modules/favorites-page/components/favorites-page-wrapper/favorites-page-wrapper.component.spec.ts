import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageWrapperComponent } from './favorites-page-wrapper.component';

describe('FavoritesPageWrapperComponent', () => {
  let component: FavoritesPageWrapperComponent;
  let fixture: ComponentFixture<FavoritesPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesPageWrapperComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
