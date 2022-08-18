import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg:any): any {
    if(arg == "" || arg.length < 3) return value;
   const resultProdu = [];
   for(const produ of value){
    if(produ.nombre.toLowerCase().indexOf(arg.toLowerCase()) > -1){
      resultProdu.push(produ);
    }
  }
  return resultProdu;
  }
  
}
