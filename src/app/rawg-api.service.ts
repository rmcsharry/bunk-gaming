import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RawgApiService {
  private key = '95d6c92a7fc84f079e51a6824e40626d';
  private readonly httpClient = inject(HttpClient);


  getPlatformParents() {
    return this.httpClient
      .get<GetPlatformParentsResponse>(
        'https://api.rawg.io/api/platforms/lists/parents?key=' + this.key
      )
      .pipe(map((data) => data.results));
  }

}

type Platform = {
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
