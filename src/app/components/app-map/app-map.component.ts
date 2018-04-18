import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';


@Component({
  selector: 'app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.css']
})
export class AppMapComponent implements OnInit {
  lat = 53.792363;
  lng = -2.2434916;
  zoom = 14;

  markers: marker[] = [
    {
      lat: 53.8013,
      lng: -2.2431
    },
    {
      lat: 53.8001,
      lng: -2.2427
    },
    {
      lat: 53.7991,
      lng: -2.2421
    },
    {
      lat: 53.7978,
      lng: -2.2413
    },
    {
      lat: 53.7968,
      lng: -2.2399
    },
    {
      lat: 53.7956,
      lng: -2.2407
    },
    {
      lat: 53.795,
      lng: -2.2408
    },
    {
      lat: 53.7932,
      lng: -2.2414
    },
    {
      lat: 53.7925,
      lng: -2.2424
    },
    {
      lat: 53.7921,
      lng: -2.2453
    },
    {
      lat: 53.7918,
      lng: -2.2473
    },
    {
      lat: 53.7906,
      lng: -2.248
    },
    {
      lat: 53.7899,
      lng: -2.2487
    },
    {
      lat: 53.7914,
      lng: -2.2479
    },
    {
      lat: 53.7903,
      lng: -2.2498
    },
    {
      lat: 53.7908,
      lng: -2.251
    },
    {
      lat: 53.7909,
      lng: -2.2521
    },
    {
      lat: 53.7903,
      lng: -2.2555
    },
    {
      lat: 53.7902,
      lng: -2.2564
    },
    {
      lat: 53.7897,
      lng: -2.2549
    },
    {
      lat: 53.7891,
      lng: -2.2537
    },
    {
      lat: 53.7888,
      lng: -2.253
    },
    {
      lat: 53.7883,
      lng: -2.2519
    },
    {
      lat: 53.788,
      lng: -2.2511
    }

  ];
  constructor() { }

  ngOnInit() {

  }

}

// tslint:disable-next-line:class-name
interface marker {
  lat: number;
  lng: number;
}
