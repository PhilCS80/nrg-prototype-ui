import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel',
  templateUrl: './fuel.component.html',
  styleUrls: ['./fuel.component.css']
})
export class FuelComponent implements OnInit {

  gaugeType = "arch";
  gaugeValue = 62;
  gaugeLabel = "Fuel";
  gaugeAppendText = "%";

  constructor() { }

  ngOnInit() {
  }

}
