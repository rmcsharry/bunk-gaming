import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGamesComponent } from './developer-games.component';

describe('DeveloperGamesComponent', () => {
  let component: DeveloperGamesComponent;
  let fixture: ComponentFixture<DeveloperGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeveloperGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
