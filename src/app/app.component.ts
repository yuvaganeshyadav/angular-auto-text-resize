import { Component, VERSION, ViewChild } from '@angular/core';
import { AutoFontResizeV2Directive } from './auto-resize-font/auto-resize-font.directive';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  @ViewChild(AutoFontResizeV2Directive) dir: AutoFontResizeV2Directive;

  test() {
    console.log(this.dir.foo());
  }
  debug() {
    this.dir.debug();
  }
  resize() {
    this.dir.resizeFont();
  }
}
