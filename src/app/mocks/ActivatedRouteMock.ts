import { Params } from '@angular/router';
import { Observable, of } from 'rxjs';

export class ActivatedRouteMock {
  snapshot: {
    params: Params;
  };

  params: Observable<Params>;

  constructor(params: Params) {
    const extendedParams = {
      ...params,
      get(paramName: string) {
        return params[paramName];
      }
    };
    this.snapshot = {
      params: extendedParams
    };
    this.params = of(extendedParams);
  }
}
