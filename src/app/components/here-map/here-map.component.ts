import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

const H = window['H'];

@Component({
  selector: 'app-here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild('map')
  mapContainer: ElementRef;

  map: any;

  constructor() { }

  ngOnInit() {
    this.map = this.initializeMap();
  }

  addMarkersToMap(map) {
    const markers = ['53.8011400,-2.2439000', '53.8013,-2.2431', '53.8001,-2.2427', '53.7991,-2.2421',
      '53.7978, -2.2413', '53.7968, -2.2399', '53.7956, -2.2407', '53.795, -2.2408', '53.7932, -2.2414',
      '53.7925, -2.2424', '53.7921, -2.2453', '53.7918, -2.2473', '53.7906, -2.248',
      '53.7899, -2.2487', '53.7914, -2.2479', '53.7903, -2.2498', '53.7908,-2.251',
      '53.7909, -2.2521', '53.7903, -2.2555', '53.7902, -2.2564',
      '53.7897, -2.2549', '53.7891, -2.2537', '53.7888, -2.253', '53.7883, -2.2519', '53.788, -2.2511'];

    let i;
    let m;
    let marker;
    for (i = 0; i < markers.length; i += 1) {

      m = markers[i].split(',');

      marker = new H.map.Marker({
        lat: m[0],
        lng: m[1],
        userlabel: 'Test'
      });

      // map.addObject(marker);
    }

  }

  initializeMap() {
    const platform = new H.service.Platform({
      app_id: 'V7SrUudOxJLgHTmIzGxd',
      app_code: 'BDR3KBUvzLdrrP6o7ipM-w',
      useCIT: true,
      useHTTPS: true
    });
    const defaultLayers = platform.createDefaultLayers({
      tileSize: 256 * Math.min(2, devicePixelRatio),
      ppi: devicePixelRatio > 1 ? 320 : 72
    });
    // const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      this.mapContainer.nativeElement,
      defaultLayers.normal.map,
      {
        center: { lat: 53.7929, lng: -2.252 },
        zoom: 15,
      }
    );
    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    const ui = H.ui.UI.createDefault(map, defaultLayers);
    ui.setUnitSystem(H.ui.UnitSystem.IMPERIAL);

    this.addMarkersToMap(this.map);

    return map;
  }

}
