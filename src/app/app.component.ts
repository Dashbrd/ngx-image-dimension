import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public image: string;
  title = 'app';
  ngAfterViewInit(): void {
    this.image = 'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80';
  }
  public onImageLoaded(details) {
    console.log(details);
  }
}
