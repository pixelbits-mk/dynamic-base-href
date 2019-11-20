import { Component, Inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app11';
  constructor(@Inject(APP_BASE_HREF) public baseHref: string) {

  }
}
