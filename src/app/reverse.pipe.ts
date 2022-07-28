import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    // let arrFromString = value.split("")
    // let reverseArr = arrFromString.reverse()
    // let reversedString = reverseArr.join()
    // return reversedString
    return value.split("").reverse().join("");
  }

}
