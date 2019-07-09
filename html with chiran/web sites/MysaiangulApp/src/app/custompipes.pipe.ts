import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipes'
})
export class CustompipesPipe implements PipeTransform {

  transform(value:string): any{
// let result = "";
// let i;
// let len= value.length
//      for(i=0;i<len;i++){
//       result = result+ value.charAt(i)
//     };
  }
// // return result;
}
