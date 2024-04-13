import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformGamesComponent } from './platform-games.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from '../../../src/app/mocks/ActivatedRouteMock';

describe('PlatformGamesComponent', () => {
  let component: PlatformGamesComponent;
  let fixture: ComponentFixture<PlatformGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformGamesComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteMock({ id: 1 })
        }
      ]
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
