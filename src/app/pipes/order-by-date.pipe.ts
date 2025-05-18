import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'orderBydate'
})

export class OrderByDatePipe implements PipeTransform{
    transform(items: any[], dateField:string, direction: 'asc' | 'desc' = 'desc'):any[] {
        const sorted = [...items].sort((a, b) => {
            const aTime = new Date(a[dateField]).getTime();
            const bTime = new Date(b[dateField]).getTime();
            return direction === 'asc' ? aTime - bTime : bTime - aTime;
          });

          return sorted;
    }
}