import { BrowserModule } from '@angular/platform-browser';
import { Type, ModuleWithProviders, NgModule } from '@angular/core';
import { EJ_REPORTVIEWER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportviewer.component';
import { EJ_REPORTDESIGNER_COMPONENTS } from '@syncfusion/reporting-angular/src/ej/reportdesigner.component';
import { Routes, RouterModule } from '@angular/router';
import { ReportViewerGettingStartedComponent } from '../components/report-viewer/getting-started/getting-started.component';
import { ReportDesignerGettingStartedComponent } from '../components/report-designer/getting-started/getting-started.component';
const components: any[] | Type<any> | ModuleWithProviders<{}> = [
  EJ_REPORTVIEWER_COMPONENTS,
  EJ_REPORTDESIGNER_COMPONENTS,
  ReportViewerGettingStartedComponent,
  ReportDesignerGettingStartedComponent
];
const routes: Routes = [
  { path: '', redirectTo: 'report-viewer/getting-started', pathMatch: 'full' },
  { path: 'report-viewer/getting-started', component: ReportViewerGettingStartedComponent },
  { path: 'report-designer/getting-started', component: ReportDesignerGettingStartedComponent },
  { path: '**', redirectTo: 'report-viewer/getting-started' }
];
@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
})

export class AppRouterModule { }
