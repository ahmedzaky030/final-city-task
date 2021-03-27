import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitiesComponent } from './cities/cities.component';
import { CityComponent } from './city/city.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { StoreModule } from '@ngrx/store';
import { CityReducer } from './city-store/city.reducer';
@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    StoreModule.forRoot({cities:CityReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
