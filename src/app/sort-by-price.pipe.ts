import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  sortOrder:number= 1;
  asc() { this.sortOrder = 1; }
  desc() { this.sortOrder = -1; }

  transform( list: any[]): any[] {
    return list.sort(( a:any ,b:any ) => {
      if (a.price < b.price) { return -this.sortOrder; }
      else if (a.price > b.price) { return this.sortOrder; }
      else return 0;
    })
  }
}
