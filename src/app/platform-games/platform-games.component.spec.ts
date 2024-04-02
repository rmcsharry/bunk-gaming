import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformGamesComponent } from './platform-games.component';

describe('PlatformGamesComponent', () => {
  let component: PlatformGamesComponent;
  let fixture: ComponentFixture<PlatformGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ PlatformGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlatformGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
