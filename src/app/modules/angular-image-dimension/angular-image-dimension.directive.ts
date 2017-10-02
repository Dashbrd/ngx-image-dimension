import { Directive, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[ngxImageDimension]'
})
export class AngularImageDimensionDirective {
  @Output()
  public onImageLoaded = new EventEmitter<ImageDimensionArgs>();
  private imageElement: HTMLImageElement;
  constructor(private elementRef: ElementRef) {
    this.imageElement = elementRef.nativeElement;
    this.imageElement.onload = () => this.onImageLoadComplete;
  }

  onImageLoadComplete(element: HTMLElement, event: Event): any {
    this.onImageLoaded.emit(new ImageDimensionArgs(this.imageElement.width,
      this.imageElement.height,
      this.imageElement.naturalHeight,
      this.imageElement.naturalWidth));
  }
}

export class ImageDimensionArgs {

  constructor(public width: number,
    public height: number,
    public naturalHeight: number,
    public naturalWidth: number) {

  }
}
