import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rpm',
  templateUrl: './rpm.component.html',
  styleUrls: ['./rpm.component.css']
})
export class RpmComponent implements OnInit {

  gaugeType = "arch";
  gaugeValue = 72;
  gaugeLabel = "High RPM";
  gaugeAppendText = "%";

  thresholdConfig = {
    '0': { color: 'green' },
    '40': { color: 'orange' },
    '70': { color: 'red' }
  };

  constructor() { }

  ngOnInit() {
  }

}
