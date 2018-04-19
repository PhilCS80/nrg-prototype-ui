import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {


  thresholdConfig = {
    '30': { color: 'green' },
    '10': { color: 'orange' },
    '0': { color: 'red' }
  };

  gaugeType = "arch";
  gaugeValue = 62;
  gaugeLabel = "Fuel";
  gaugeAppendText = "%";

  constructor() { }

  ngOnInit() {
  }

}
