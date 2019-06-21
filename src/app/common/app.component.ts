import { Component, HostListener, ViewChild, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Title, Meta } from '@angular/platform-browser';
import { SideBarComponent } from './sidebar/sidebar.component';
import * as data from './samples.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tocSlideLeft = false;
  tocMobileSlideLeft = false;
  @ViewChild('sidebar') sidebar: SideBarComponent;

  constructor(private router: Router, private titleService: Title, private meta: Meta) {
    this.router.events.pipe(
      filter((event: NavigationStart) => event instanceof NavigationStart)
    ).subscribe((event: NavigationStart) => {
      const reportViewer = '/report-viewer/';
      const reportDesigner = '/report-designer/';
      let isReportViewer;
      let sampleData;
      if (event.url === '/') {
        sampleData = data.ReportViewer.samples[0];
        isReportViewer = true;
      } else if (event.url.indexOf('/report-viewer') !== -1) {
        sampleData = data.ReportViewer.samples.filter((sample) => reportViewer + sample.routerPath === event.url)[0];
        isReportViewer = true;
      } else {
        sampleData = data.ReportDesigner.samples.filter((sample) => reportDesigner + sample.routerPath === event.url)[0];
        isReportViewer = false;
      }
      this.sidebar.selectedPath = (isReportViewer ? reportViewer : reportDesigner) + sampleData.routerPath;
      this.updateMetaData(sampleData);
    });
  }

  ngOnInit(): void {
    this.setReportsHeight();
  }

  public updateMetaData(sampleData): void {
    let title = sampleData.metaData.title;
    if (!title) {
      title = sampleData.sampleName;
    }
    if (title.length <= 20) {
      this.titleService.setTitle(`${title} | Angular Report | Syncfusion`);
    } else {
      this.titleService.setTitle(`${title} | Angular Report`);
    }
    this.meta.updateTag({ name: 'description', content: sampleData.metaData.description });
  }

  updateOverlay(): void {
    if (!window.matchMedia('(max-width:550px)').matches) {
      this.tocMobileSlideLeft = false;
    }
  }

  public onHamBurgerClick(): void {
    if (window.matchMedia('(max-width:550px)').matches) {
      this.tocMobileSlideLeft = !this.tocMobileSlideLeft;
    } else {
      this.tocSlideLeft = !this.tocSlideLeft;
    }
  }

  public onMobileOverlayClick(): void {
    this.onHamBurgerClick();
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.setReportsHeight();
    this.updateOverlay();
  }

  private setReportsHeight(): void {
    let style: HTMLElement = document.getElementById('reports-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'reports-style';
      document.body.appendChild(style);
    }
    style.textContent = `ej-sample{
      display:block;
      overflow: hidden;
      height: ${window.innerHeight}px
    }`;
  }

}
