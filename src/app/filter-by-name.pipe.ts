import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ 
  name: 'filterByName',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {

  transform(list: any[], filterOrder: string): any[] {
    if (!list || !filterOrder) {
      return list; // Si `list` ou `filterOrder` est invalide, retourne la liste originale
    }

    return list.filter(item =>
      item.name.toLowerCase().includes(filterOrder.toLowerCase())
    );
  }
}