import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string, propStatus:string) :any{
    if(value.length === 0 || filterString === '')
    {
      return value;
    }
    const resultArray=[];
    for(let item of value){
      if(item[propStatus] === filterString)
      {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
