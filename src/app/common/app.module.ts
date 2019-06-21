import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRouterModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './sidebar/sidebar.component';

import 'bootstrap';

// data-visualization
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.bulletgraph.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.chart.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.circulargauge.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.lineargauge.min';
import '@syncfusion/reporting-javascript/Scripts/reports/data-visualization/ej.map.min';

// code-mirror
import 'codemirror/lib/codemirror';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/sql-hint';
import 'codemirror/mode/sql/sql';
import 'codemirror/mode/vb/vb';

import * as CodeMirror from 'codemirror';
const codemirror = 'CodeMirror';
window[codemirror] = CodeMirror;

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
