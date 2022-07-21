import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import { HistoryComponent } from './history/history.component';
import {MatCardModule} from "@angular/material/card";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {MatButtonModule} from "@angular/material/button";
import { CspanComponent } from './cspan/cspan.component';
import { ClimateActionComponent } from './climate-action/climate-action.component';
import {HttpClientModule} from "@angular/common/http";
import { HighchartsChartModule } from 'highcharts-angular';
import { ModernRacismComponent } from './modern-racism/modern-racism.component';
import { TerminologyComponent } from './terminology/terminology.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    CspanComponent,
    ClimateActionComponent,
    ModernRacismComponent,
    TerminologyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    FontAwesomeModule,
    MatButtonModule,
    HttpClientModule,
    HighchartsChartModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: 'climate-change', component: ClimateActionComponent},
      {path: 'cspan', component: CspanComponent},
      {path: 'history', component: HistoryComponent},
      {path: 'racism', component: ModernRacismComponent},
      {path: 'terminology', component: TerminologyComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(fas, far);
  }
}
