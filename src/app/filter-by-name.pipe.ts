import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true
})
export class FilterByNamePipe implements PipeTransform {
  transform(results: any[], searchQuery: string) : any[] {
    return results.filter(result => result.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }
}