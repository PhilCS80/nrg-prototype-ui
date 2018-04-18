import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speedometer',
  templateUrl: './speedometer.component.html',
  styleUrls: ['./speedometer.component.css']
})
export class SpeedometerComponent implements OnInit {

  gaugeType = "arch";
  gaugeValue = 42;
  gaugeLabel = "Average Speed";
  gaugeAppendText = "mph";

  constructor() { }

  ngOnInit() {
  }

}
