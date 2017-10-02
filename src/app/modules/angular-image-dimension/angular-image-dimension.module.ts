import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularImageDimensionDirective } from './angular-image-dimension.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AngularImageDimensionDirective],
  exports: [AngularImageDimensionDirective]
})
export class AngularImageDimensionModule { }
