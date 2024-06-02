import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterLinkActive
  ],
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

}
