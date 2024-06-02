import { Component } from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatCardModule
  ],
  styleUrls: ['./education.component.scss']
})
export class EducationComponent {

}
