import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(list: any[], sortOrder: string): any[] {
    if (!list || !sortOrder) {
      return list; // Retourne la liste originale si `list` ou `sortOrder` est indéfini
    }

    return list.sort((a: any, b: any) => {
      if (sortOrder === "asc") {
        return a.price - b.price; // Tri croissant
      } else if (sortOrder === "desc") {
        return b.price - a.price; // Tri décroissant
      }
      return 0; // Pas de changement si le `sortOrder` est invalide
    });
  }
}