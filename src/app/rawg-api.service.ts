import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { environment } from '../../src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RawgApiService {
  private key = environment.rawg.api_key;
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
   }

  getGame(gameId: number) {
    return this.httpClient.request(
      'GET',
      'https://api.rawg.io/api/games/' + gameId + '?key=' + this.key,
      { responseType: 'json' }
    );
  }

  getDeveloper(developerId: number) {
    return this.httpClient.get<Developer>(
      'https://api.rawg.io/api/developers/' + developerId + '?key=' + this.key
    );
  }

  getDevelopers() {
    return this.httpClient
      .get<GetDevelopersResponse>(
        'https://api.rawg.io/api/developers?key=' + this.key
      )
      .pipe(map((data) => data.results));
  }


  getGamesByDeveloper(developerId: number) {
    return this.httpClient
      .get(
        'https://api.rawg.io/api/games?key=' +
          this.key +
          '&developers=' +
          developerId +
          '&ordering=-added'
      )
      .pipe(map((data: any) => data.results));
  }

  getPlatformParents() {
    return this.httpClient
      .get<GetPlatformParentsResponse>(
        'https://api.rawg.io/api/platforms/lists/parents?key=' + this.key
      )
      .pipe(map((data) => data.results));
  }

  getPlatform(platformId: number) {
    return this.httpClient.get<Platform>(
      'https://api.rawg.io/api/platforms/' + platformId + '?key=' + this.key
    );
  }

  getGamesByPlatform(platformId: number) {
    return this.httpClient
      .get(
        'https://api.rawg.io/api/games?key=' +
          this.key +
          '&platforms=' +
          platformId +
          '&ordering=-added'
      )
      .pipe(map((data: any) => data.results));
  }

  getLatestGames() {
    return this.httpClient
      .get(
        'https://api.rawg.io/api/games?key=' +
          this.key +
          '&ordering=released&page_size=4'
      )
      .pipe(map((data: any) => data.results));
  }
}

export type Platform = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  image?: string;
  year_start?: number;
  year_end?: number;
};

type PlatformParentSingle = {
  id: number;
  name: string;
  slug: string;
  platforms: Platform[];
};

type GetPlatformParentsResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: PlatformParentSingle[];
};

type GetDevelopersResponse = {
  count: number;
  next?: string;
  previous?: string;
  results: Developer[];
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  name_original: string;
  description: string;
  metacritic: number;
  metacritic_platforms: GamePlatformMetacritic[];
  released: string;
  tba: boolean;
  updated: string;
  background_image: string;
  background_image_additional: string;
  website: string;
  rating: number;
  rating_top: number;
  ratings: any;
  reactions: any;
  added: number;
  added_by_status: any;
  playtime: number;
  screenshots_count: number;
  movies_count: number;
  creators_count: number;
  achievements_count: number;
  parent_achievements_count: number;
  reddit_url: string;
  reddit_name: string;
  reddit_description: string;
  reddit_logo: string;
  reddit_count: number;
  twitch_count: number;
  youtube_count: number;
  reviews_text_count: number;
  ratings_count: number;
  suggestions_count: number;
  alternative_names: string[];
  metacrític_url: string;
  parents_count: number;
  additions_count: number;
  games_series_count: number;
  esrb_rating: any;
  parent_platforms: {
    platform: { id: number; slug: string; name: string };
  }[];
  platforms: {
    platform: Platform;
    released_at: string;
    requirements: any;
  }[];
  developers: any[];
  stores: any[];
};

type GamePlatformMetacritic = {
  metascore: number;
  url: string;
};

export type Developer = {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  description: string;
  games?: { id: number; slug: string; name: string; added: number }[];
};
