import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, page:number = 0, arg:any, items:number ): any {
    if(arg == null) return value.slice(page,page + items)
    if(arg == "") return value.slice(page,page +items);
   const resultProdu = [];
   for(const produ of value){
    if(produ.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultProdu.push(produ);
    }
  }
  return resultProdu;
  }
  
}
