import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPlanetComponent } from './components/add-planet/add-planet.component';
import { ListPlanetComponent } from './components/list-planet/list-planet.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPlanetComponent,
    ListPlanetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
