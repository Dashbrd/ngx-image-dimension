import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularImageDimensionModule } from 'app/modules/angular-image-dimension/angular-image-dimension.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularImageDimensionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
