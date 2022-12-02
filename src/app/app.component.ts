import { Component } from '@angular/core';
import { ConverterPipe } from './converter.pipe';
import { temp } from './temp';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ConverterPipe: ConverterPipe) {
  }
  title = 'TempConverter';
  units: string = '';
  temps: temp[]= [
    {name:'Kelvin'},{name:'Celsius'},{name:'Fahrenheit'}
  ]
  c:number = 0;
  flg: boolean= false;
  value: number= 0;
  temp:string ='';
  temper:number=0
  unit1:string='';
  unitt1:boolean=this.unit1 === this.units;
  temper1:number= 0

  convert(): void{
  this.temper1 =  this.ConverterPipe.transform(this.temper, this.units, this.unit1);
  this.flg = true;
   }
}
