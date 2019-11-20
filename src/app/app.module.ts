import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // tslint:disable-next-line: no-string-literal
    { provide: APP_BASE_HREF, useValue: window['__BASE_HREF__'] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
