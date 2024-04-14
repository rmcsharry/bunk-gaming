import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperGamesComponent } from './developer-games.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteMock } from '../../../src/app/mocks/ActivatedRouteMock';

describe('DeveloperGamesComponent', () => {
  let component: DeveloperGamesComponent;
  let fixture: ComponentFixture<DeveloperGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      declarations: [DeveloperGamesComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: new ActivatedRouteMock({ id: 1 })
        }
      ]
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
