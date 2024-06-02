import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {ToolbarComponent} from "./toolbar/toolbar.component";

@Component({
  standalone: true,

  imports: [
    RouterOutlet,
    ToolbarComponent,
  ],

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
