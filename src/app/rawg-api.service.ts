import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RawgApiService {
  private key = '95d6c92a7fc84f079e51a6824e40626d';
  private readonly httpClient = inject(HttpClient);

  getGame(gameId: number) {
    return this.httpClient.request(
      'GET',
      'https://api.rawg.io/api/games/' + gameId + '?key=' + this.key,
      { responseType: 'json' }
    );
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
          '&ordering=added'
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
