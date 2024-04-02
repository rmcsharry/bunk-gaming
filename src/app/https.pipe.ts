import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'https',
  standalone: true,
})
export class HttpsPipe implements PipeTransform {
  transform(value: string): string {
    return `https://${value}`;
  }
}
