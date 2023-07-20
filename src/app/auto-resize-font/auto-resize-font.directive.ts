import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
} from '@angular/core';

/**
 * This directive resizes the font for (fixed height, fixed width) containers
 */
@Directive({
  selector: '[appAutoFontResizeV2]',
})
export class AutoFontResizeV2Directive implements OnInit, OnChanges {
  /** minFontSize in px */
  @Input() minFontSize = 2;
  /**
   * size (in px) by which current font size is to be reduced
   */
  @Input() step = 1;

  textContainer: ElementRef = this.elementRef;
  textContainerNative: HTMLElement = this.elementRef.nativeElement;

  clientHeight = this.textContainerNative.clientHeight;
  isOverflow = false;

  @HostListener('input') onInput() {
    this.resizeFont();
  }

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.resizeFont();
  }
  ngOnChanges() {
    console.log('change det rans');
  }

  /**
   * @param fontSize - current font size
   */
  getNewFontSize(fontSize: number) {
    return fontSize - this.step;
  }

  /**
   * Try to call this method less often as possible,
   * since this method does DOM update.
   */
  updateFontSizeInDOM(newFontSize: number) {
    this.renderer.setStyle(
      this.textContainerNative,
      'fontSize',
      `${newFontSize}px`
    );
  }

  resizeFont() {
    this.isOverflow = this.textContainerNative.scrollHeight > this.clientHeight;

    const styles = getComputedStyle(this.textContainerNative);

    let currentFontSize = parseInt(styles.fontSize, 10);
    let newFontSize = this.getNewFontSize(currentFontSize);

    while (this.isOverflow && newFontSize >= this.minFontSize) {
      console.log({ overflow: this.isOverflow, currentFontSize, newFontSize });
      currentFontSize = newFontSize;
      newFontSize = this.getNewFontSize(currentFontSize);
      this.updateFontSizeInDOM(currentFontSize);
      this.isOverflow =
        this.textContainerNative.scrollHeight > this.clientHeight;
    }
  }

  foo() {
    console.log(this.textContainer);
  }
  debug() {
    debugger;
  }
}
