import {
  Directive, ElementRef, Output,
  EventEmitter, OnChanges, SimpleChanges, Input
} from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[ngxImageDimension],[ngx-image-dimension]'
})
export class AngularImageDimensionDirective implements OnChanges {

  @Input()
  public imageSource: string;
  @Output()
  public onImageLoaded = new EventEmitter<ImageDimensionArgs>();
  private imageElement: HTMLImageElement;
  constructor(private elementRef: ElementRef) {
    this.imageElement = elementRef.nativeElement;
    this.imageElement.onload = (event: Event) => this.onImageLoadComplete(this.imageElement, event);
  };

  ngOnChanges(changes: SimpleChanges): void {
    const imageSourceChange = changes['imageSource'];
    if (imageSourceChange) {
      this.imageElement.src = this.imageSource;
    }
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
