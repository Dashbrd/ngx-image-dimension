import { Component, AfterViewInit, AfterViewChecked } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public image: any;
  title = 'app';

  constructor() {
    this.image = 'https://images.unsplash.com/photo-1467932760935-519284fc87fa?dpr=2&auto=compress,format&fit=crop&w=1199&h=800&q=80';
  }
  public onImageLoaded(details) {
    console.log(details);
  }
}
