import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule
  ],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
