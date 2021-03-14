import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  title = 'aa';
  public bgBig : string = "assets/images/circle.svg";
  public bgSmall : string = "assets/images/blob-small.svg";
  public bgWave : string = "assets/images/sol_wave_bg.svg";
  public card23 : string = "assets/images/Rectangle-Copy-23.svg";
  public max = 300000;
  public min = 100000;
  public max1 = 100000;
  public min1 = 10000;
  public value = 150000;
  public value1 = 50000;

  selectedValue: string = '6 Months';
  foods: Food[] = [
    {value: '6 Months', viewValue: '6 Months'},
    {value: '12 Months', viewValue: '12 Months'},
    {value: '18 Months', viewValue: '18 Months'}
  ];
}
