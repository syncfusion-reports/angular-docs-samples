import { Component } from '@angular/core';

@Component({
  selector: 'ej-sample',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class ReportViewerGettingStartedComponent {
  public serviceUrl: string;  
  public reportPath: string;

    constructor() {
        this.serviceUrl = 'https://reports.syncfusion.com/demos/services/api/ReportViewer';
        this.reportPath = '~/Resources/docs/sales-order-detail.rdl';
    }
}
