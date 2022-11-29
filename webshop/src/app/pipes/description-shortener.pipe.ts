import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descriptionShortener'
})
export class DescriptionShortenerPipe implements PipeTransform {

  transform(value: string, descriptionLength: number): string {
    return value.substring(0,descriptionLength);
  }

}
