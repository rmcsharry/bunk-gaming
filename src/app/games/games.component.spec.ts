import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesComponent } from './games.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from '../../../src/app/mocks/ActivatedRouteMock';

describe('GamesComponent', () => {
  let component: GamesComponent;
  let fixture: ComponentFixture<GamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesComponent, HttpClientTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteMock({ id: 1 })
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
