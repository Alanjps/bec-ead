import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'search',
})
export class SearchPipeV02 implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  /*transform(value: string, ...args) {
    return value.toLowerCase();
  }*/


  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    terms = terms.toLowerCase();
    return items.filter( it => {
      return it.titulo.toLowerCase().includes(terms); // only filter country name
    });
  }

}
