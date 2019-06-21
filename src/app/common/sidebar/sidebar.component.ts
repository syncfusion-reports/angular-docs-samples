import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as data from './../samples.json';

@Component({
  selector: 'ej-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SideBarComponent {
  reportViewer = 'report-viewer/';
  reportDesigner = 'report-designer/';
  reportViewerSample = data.ReportViewer.samples;
  reportDesignerSample = data.ReportDesigner.samples;
  selectedPath: string = undefined;

  constructor(private router: Router) { }

  public onSampleClick(config): void {
    this.router.navigate([config.prependHash + config.sample.routerPath]);
  }

  public tocSelection(toc: HTMLElement): string {
    if (!toc.classList.contains('ej-doc-toc-selected')) {
      toc.focus();
    }
    return 'ej-doc-toc-selected';
  }

}
