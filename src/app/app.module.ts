import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule, MatListModule, MatIconModule, MatTooltipModule, MatGridListModule } from '@angular/material';
import { NgxGaugeModule } from 'ngx-gauge';

import { NgModule, ApplicationRef } from '@angular/core';

import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
  MatDialogModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatChipsModule,
  MatToolbarModule
} from '@angular/material';
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { AppMapComponent } from './components/app-map/app-map.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './components/menu/menu.component';
import { SpeedometerComponent } from './components/speedometer/speedometer.component';
import { FuelComponent } from './components/fuel/fuel.component';
import { GaugesComponent } from './components/gauges/gauges.component';
import { VehicleInfoComponent } from './components/vehicle-info/vehicle-info.component';
import { DriverBehaviourComponent } from './components/driver-behaviour/driver-behaviour.component';


@NgModule({
  declarations: [
    AppComponent,
    AppMapComponent,
    DashboardComponent,
    MenuComponent,
    SpeedometerComponent,
    FuelComponent,
    GaugesComponent,
    VehicleInfoComponent,
    DriverBehaviourComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatGridListModule,
    NgxGaugeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQMxj_YIugC41htuSI4JFw00txLiht9JE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
