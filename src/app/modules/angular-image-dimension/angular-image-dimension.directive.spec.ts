import { AngularImageDimensionDirective } from './angular-image-dimension.directive';
import { ElementRef } from '@angular/core';

describe('AngularImageDimensionDirective', () => {
  it('should create an instance', () => {
    let element = document.createElement('img');
    const directive = new AngularImageDimensionDirective();
    expect(directive).toBeTruthy();
  });
});
