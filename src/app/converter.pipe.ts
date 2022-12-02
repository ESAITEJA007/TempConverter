import { Pipe, PipeTransform } from '@angular/core';
import { __values } from 'tslib';

@Pipe({
  name: 'converter'
})
export class ConverterPipe implements PipeTransform {

  transform(temper: number,unit: String,unit1: string, ...args: unknown[]): any {
    if(temper != null || isNaN(temper)){
      if(unit == 'Celsius' && unit1 == 'Fahrenheit'){
        var temperature = (temper - 32) * .5556;
               return temperature.toFixed(2);
      }
      if(unit == 'Fahrenheit' && unit1 == 'Celsius'){
        var temperature = (temper * 1.8) + 32;
               return temperature.toFixed(2);
      }
      if(unit == 'Kelvin' && unit1 == 'Fahrenheit'){
        var temperature = (temper  + 459.67) * 0.555;
               return temperature.toFixed(2);
      }
      if(unit == 'Kelvin' && unit1 == 'Celsius'){
        var temperature = (temper + 273.15);
               return temperature.toFixed(2);
      }
      if(unit == 'Celsius' && unit1 == 'Kelvin'){
        var temperature = (temper -  273.15);
               return temperature.toFixed(2);
      }
      if(unit == 'Fahrenheit' && unit1 == 'Kelvin'){
        var temperature = (temper - 273.15)  * 1.8 + 32.
               return temperature.toFixed(2);
      }
    }
    return null;
  }

}
