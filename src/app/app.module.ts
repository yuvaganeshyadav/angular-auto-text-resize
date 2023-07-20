import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AutoFontResizeV2Directive } from './auto-resize-font/auto-resize-font.directive';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, AutoFontResizeV2Directive],
  bootstrap: [AppComponent],
})
export class AppModule {}
